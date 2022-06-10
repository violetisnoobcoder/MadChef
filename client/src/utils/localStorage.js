export const getSavedRecipesIds = () => {
  const savedRecipeIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : [];

  return savedRecipeIds;
};

export const saveRecipeIds = (recipeIdArr) => {
  if (recipeIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(recipeIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removeRecipeId = (recipeId) => {
  const savedRecipeIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedRecipeIds) {
    return false;
  }

  const updatedSavedRecipeIds = savedRecipeIds?.filter((savedId) => savedId !== recipeId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedRecipeIds));

  return true;
};
