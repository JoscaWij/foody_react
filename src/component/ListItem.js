import React from "react";

function ListItem({ title }) {
  return (
    <div>
      <span>{title}</span>
      <img src="#" alt={`Picture of ${title}`} />
    </div>
  );
}

export default ListItem;
