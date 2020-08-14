import React from "react";
import "./ListItem.css";
import ExpandableRecipe from "./ExpandableRecipe";

function ListItem({ title }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="listItem">
      <img src="#" alt={`Picture of ${title}`} />
      <span>{title}</span>
      <button onClick={handleClick}>Get Recipe</button>
      {open && <ExpandableRecipe />}
    </div>
  );
}

export default ListItem;
