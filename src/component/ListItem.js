import React from "react";
import "./ListItem.css";
import ExpandableRecipe from "./ExpandableRecipe";

function ListItem({ title, imgSrc, instructions }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="listItem">
      <img src={imgSrc} alt={title} />
      <span>{title}</span>
      <button onClick={handleClick}>Instructions</button>
      {open && (
        <ExpandableRecipe mealTitle={title} instructions={instructions} />
      )}
    </div>
  );
}

export default ListItem;
