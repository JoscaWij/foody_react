import React from "react";
import "./List.css";

function List({ children }) {
  return <div className="mealList">{children}</div>;
}

export default List;
