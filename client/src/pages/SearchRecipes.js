import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
import { saveRecipeIds, getSavedRecipesIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
import { SAVE_RECIPE } from "../utils/mutations";
import "./searchRecipes.scss";

const SearchRecipes = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipesIds());

  const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=5d21fcc224ed4f1caff20062b5740f70&ingredients=${searchInput}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const meals = await response.json();

      const recipeData = meals.map((data) => ({
        recipeId: data.id,
        title: data.title,
        description: "",
        image: data.image || "",
      }));
      setSearchedRecipes(recipeData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveRecipe = async (recipeId) => {
    const recipeToSave = searchedRecipes.find(
      (data) => data.recipeId === recipeId
    );
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveRecipe({
        variables: { newRecipe: { ...recipeToSave } },
      });

      setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container className="searchLayout">
          <h1>SEARCH FOR RECIPES</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a recipe"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results:`
            : "Search for a recipe to begin"}
        </h2>
        <CardColumns>
          {searchedRecipes.map((data) => {
            return (
              <Card key={data.recipeId} border="dark">
                {data.image ? (
                  <Card.Img
                    src={data.image}
                    alt={`The cover for ${data.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === data.recipeId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveRecipe(data.recipeId)}
                    >
                      {savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === data.recipeId
                      )
                        ? "RECIPE SAVED"
                        : "SAVE RECIPE"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchRecipes;
