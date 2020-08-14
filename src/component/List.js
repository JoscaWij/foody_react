import React from "react";
import "./List.css";

function List(props) {
  return <div className="mealList">{props.children}</div>;
}

export default List;
