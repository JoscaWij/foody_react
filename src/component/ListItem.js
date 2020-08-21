import React from "react";
import ExpandableRecipe from "./ExpandableRecipe";
import styled from "@emotion/styled";

function ListItem({ title, imgSrc, instructions }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItemStyled>
      <img className="listItem_img" src={imgSrc} alt={title} />
      <span className="listItem_title">{title}</span>
      <button className="listItem_button" onClick={handleClick}>
        Instructions
      </button>
      {open && (
        <ExpandableRecipe mealTitle={title} instructions={instructions} />
      )}
    </ListItemStyled>
  );
}

export default ListItem;

const ListItemStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid var(--bg-color) 1px;
  padding: 0.5em 0;

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
  }

  button:hover {
    background-color: var(--bg-color-dark);
  }
`;
