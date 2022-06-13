export const getSavedRecipesIds = () => {
  const savedRecipeIds = localStorage.getItem('saved_recipe')
    ? JSON.parse(localStorage.getItem('saved_recipe'))
    : [];

  return savedRecipeIds;
};

export const saveRecipeIds = (recipeIdArr) => {
  if (recipeIdArr.length) {
    localStorage.setItem('saved_recipe', JSON.stringify(recipeIdArr));
  } else {
    localStorage.removeItem('saved_recipe');
  }
};

export const removeRecipeId = (recipeId) => {
  const savedRecipeIds = localStorage.getItem('saved_recipe')
    ? JSON.parse(localStorage.getItem('saved_recipe'))
    : null;

  if (!savedRecipeIds) {
    return false;
  }

  const updatedSavedRecipeIds = savedRecipeIds?.filter((savedId) => savedId !== recipeId);
  localStorage.setItem('saved_recipe', JSON.stringify(updatedSavedRecipeIds));

  return true;
};
