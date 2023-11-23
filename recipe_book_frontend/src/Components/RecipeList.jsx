import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add some recipes!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <strong>{recipe.name}</strong>
              <p>Ingredients: {recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
