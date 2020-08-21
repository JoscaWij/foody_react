import React from "react";
import styled from "@emotion/styled";

const RecipeDetails = styled.div`
  background-color: #fff;
  margin: 0.4em;
  padding: 0.5em;
  border: solid 0.3em lightgrey;
  border-radius: 20px;
`;

function MainRecipeDetails(props) {
  return <RecipeDetails>RecipeDetails</RecipeDetails>;
}

export default MainRecipeDetails;
