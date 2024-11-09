import React, { useState } from 'react'; 
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [servings, setServings] = useState(1);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleServingsChange = (event) => {
    setServings(Number(event.target.value));
  };

  return (
    <div>
      <h1>Recipe Cost Calculator</h1>
      <IngredientForm addIngredient={addIngredient} />
      <IngredientList ingredients={ingredients} servings={servings} />
      <div>
        <label>Number of Servings: </label>
        <input
          type="number"
          min="1"
          value={servings}
          onChange={handleServingsChange}
        />
      </div>
    </div>
  );
}

export default App;
