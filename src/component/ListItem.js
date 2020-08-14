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
      <img className="listItem_img" src={imgSrc} alt={title} />
      <span className="listItem_title">{title}</span>
      <button className="listItem_button" onClick={handleClick}>
        Instructions
      </button>
      {open && (
        <ExpandableRecipe mealTitle={title} instructions={instructions} />
      )}
    </div>
  );
}

export default ListItem;
