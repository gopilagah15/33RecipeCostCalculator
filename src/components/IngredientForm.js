import React, { useState } from 'react';

function IngredientForm({ addIngredient }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !quantity || !cost) return;
    addIngredient({ name, quantity: parseFloat(quantity), cost: parseFloat(cost) });
    setName('');
    setQuantity('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Ingredient</h2>
      <input
        type="text"
        placeholder="Ingredient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Add Ingredient</button>
    </form>
  );
}

export default IngredientForm;
