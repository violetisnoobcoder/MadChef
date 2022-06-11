// import React, { useState, useEffect } from "react";
// import SearchRecipes from "../pages/SearchRecipes";


// export default function Meal({ meal }) {
//     const [imageUrl, setImageUrl] = useState("");
  
//     useEffect(() => {
//       fetch(
//         `https://api.spoonacular.com/recipes/${data.recipeId}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setImageUrl(data.image);
//         })
//         .catch(() => {
//           console.log("error");
//         });
//     }, [meal.id]);