import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      recipeCount
      SavedRecipes {
        recipeId
        description
        title
        image
        link
      }
    }
  }
`;