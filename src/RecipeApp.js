import React from 'react';
import './index.css';
import './RecipeApp.css';
import Recipe from "./Recipe";
import Navbar from "./navbar";
import RecipeList from "./RecipeList";
import "./Recipe.css";

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
