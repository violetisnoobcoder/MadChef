import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeRecipeId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations';

const SavedRecipes = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);
  const userData = data?.me || {};

  const handleDeleteRecipe = async (recipeId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeRecipe({
        variables: { recipeId },
      });

      removeRecipeId(recipeId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Saved Recipes</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.SavedRecipes
        .length
            ? `Viewing ${userData.SavedRecipes
            .length} saved ${userData.SavedRecipes
            .length === 1 ? 'recipe' : 'recipes'}:`
            : 'You have no saved recipes'}
        </h2>
        <CardColumns>
          {userData.SavedRecipes
        .map((data) => {
            return (
              <Card key={data.recipeId} border='dark'>
                {data.image ? <Card.Img src={data.image} alt={`The picture for ${data.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(data.recipeId)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedRecipes;
