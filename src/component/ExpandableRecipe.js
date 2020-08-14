import React from "react";
import "./ExpandableRecipe.css";

function ExpandableRecipe({ mealTitle, instructions }) {
  return (
    <div className="expandableRecipe">
      <span>How to make: {mealTitle}</span>
      <p>{instructions}</p>
    </div>
  );
}

export default ExpandableRecipe;
