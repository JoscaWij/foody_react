import React from "react";
import "./ExpandableRecipe.css";

function ExpandableRecipe({ mealTitle, videoLink }) {
  const iframe = () => (
    <iframe src={videoLink} title={`Instruction video of ${mealTitle}`} />
  );

  return (
    <div className="expandableRecipe">
      <span>How to make: {mealTitle}</span>
      {iframe()}
    </div>
  );
}

export default ExpandableRecipe;
