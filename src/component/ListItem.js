import React from "react";
import "./ListItem.css";

function ListItem({ title }) {
  const handleClick = () => {
    alert("hunger!");
  };
  return (
    <div className="listItem">
      <img src="#" alt={`Picture of ${title}`} />
      <span>{title}</span>
      <button onClick={handleClick}>get recipe</button>
    </div>
  );
}

export default ListItem;
