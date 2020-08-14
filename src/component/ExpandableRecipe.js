import React from "react";
import "./ExpandableRecipe.css";

function ExpandableRecipe({ mealTitle, instructions }) {
  return (
    <div className="expandableRecipe">
      <span className="expandableRecipe_headline">
        How to make: {mealTitle}
      </span>
      <p>{instructions}</p>
    </div>
  );
}

export default ExpandableRecipe;
