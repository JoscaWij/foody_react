import React from "react";
import ExpandableRecipe from "./ExpandableRecipe";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function ListItem({ title, imgSrc, instructions }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemStyled>
      <Link to={`/recipe/${title}`}>
        <img src={imgSrc} alt={title} />
        <span>{title}</span>
      </Link>
      <button onClick={handleClick}>Instructions</button>
      {open && (
        <ExpandableRecipe mealTitle={title} instructions={instructions} />
      )}
    </ListItemStyled>
  );
}

export default ListItem;

const ListItemStyled = styled.div`
  border-bottom: solid var(--bg-color) 1px;
  padding: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  > * {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    flex-grow: 1;
    text-align: center;
  }

  *:last-child {
    border: none;
  }

  img {
    height: 6em;
    width: 6em;
    object-fit: contain;
    border-radius: 15%;
  }

  span {
    font-size: 2em;
    font-family: "Covered By Your Grace", cursive;
    flex-grow: 1;
  }

  button {
    border-style: none;
    border-radius: 20px;
    height: 3em;
    padding: 0 1em;
    background-color: var(--bg-color);
    transition: 0.3s;
    color: white;
    font-weight: bolder;
    flex-grow: 0;
  }

  button:hover {
    background-color: var(--bg-color-dark);
  }
`;
