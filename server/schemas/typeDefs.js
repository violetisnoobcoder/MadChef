const { gql } = require('apollo-server-express');


const typeDefs = gql`
    
    type Ingredient {
        name: String
    }

    type Recipe {
        id: Number
        diets: String
        ingredients: String
    }

    type Query {
        ingredients: [Ingredient]
        recipe: [Recipe]

    }


`

module.exports = typeDefs