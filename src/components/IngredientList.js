import React from 'react';

function IngredientList({ ingredients, servings }) {
  const totalCost = ingredients.reduce((acc, item) => acc + item.cost, 0);
  const perServingCost = totalCost / servings;

  return (
    <div>
      <h2>Ingredients List</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity} units - ${ingredient.cost.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total Recipe Cost: ${totalCost.toFixed(2)}</h3>
      <h3>Cost Per Serving: ${perServingCost.toFixed(2)}</h3>
    </div>
  );
}

export default IngredientList;
