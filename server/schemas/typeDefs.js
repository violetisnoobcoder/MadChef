const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    recipeCount: Int
    SavedRecipes: [Recipe]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Recipe {
    recipeId: ID!
    description: String
    title: String
    image: String
    link: String
  }

  input inputRecipe {
    recipeId: Int
    title: String
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(newRecipe: inputRecipe!): User
    removeRecipe(recipeId: ID!): User
  }
`;

module.exports = typeDefs;
