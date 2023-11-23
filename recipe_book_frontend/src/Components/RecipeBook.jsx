import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import Home from './Home';

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
        
      <h1>Recipe Book</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipeBook;
