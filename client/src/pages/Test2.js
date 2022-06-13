import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import "./styles.css";

function App() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const checkList = [
    "Onion",
    "Cheese",
    "Cream",
    "Chicken",
    "Beef",
    "Eggs",
    "Quorn",
  ];

  // Add/Remove checked item from list
  const handleCheck = async (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=5d21fcc224ed4f1caff20062b5740f70&ingredients=${updatedList}&number=3`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        debugger;

        const meals = await response.json();

        const recipeData = meals.map((data) => ({
          recipeId: data.id,
          title: data.title,
          description: "",
          image: data.image || "",
        }));
        setSearchedRecipes(recipeData);
      } catch (err) {
        console.error(err);
      }
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + "+" + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div>
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
                    </Card.Body>
                  </Card>
                );
              })}
            </CardColumns>
          </Container>
        </div>
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
