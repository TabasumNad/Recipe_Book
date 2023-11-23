import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && ingredients.trim() !== '') {
      addRecipe({ name, ingredients });
      setName('');
      setIngredients('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Ingredients:
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
