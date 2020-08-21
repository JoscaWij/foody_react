import React from "react";
import styled from "@emotion/styled";

const ExpandableDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  background: var(--bg-color);
  border-radius: 20px;
  padding: 1em 1.5em;
  margin-top: 0.5em;
  text-align: center;

  span {
    font-weight: bold;
    flex-basis: 100%;
  }
`;

function ExpandableRecipe({ mealTitle, instructions }) {
  return (
    <ExpandableDiv>
      <span>How to make: {mealTitle}</span>
      <p>{instructions}</p>
    </ExpandableDiv>
  );
}

export default ExpandableRecipe;
