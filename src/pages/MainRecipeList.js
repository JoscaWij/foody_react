import React from "react";
import List from "../component/List";
import ListItem from "../component/ListItem";
import ExpandableRecipe from "../component/ExpandableRecipe";
import useFetch from "../hooks/useFetch";
import { fetchRandomRecipes } from "../api/mealDB";

function MainRecipeList() {
  const { recipes, loading, error } = useFetch(fetchRandomRecipes, 10);

  return (
    <main>
      {loading && <div>Calling my Mum to ask ...</div>}
      {error && <div>Error! My Mum had no answer. Please try again later</div>}
      <List>
        {recipes?.map((recipe) => (
          <ListItem
            key={recipe.id}
            title={recipe.title}
            imgSrc={recipe.imgSrc}
            instructions={recipe.instructions}
          >
            <ExpandableRecipe />
          </ListItem>
        ))}
      </List>
    </main>
  );
}

export default MainRecipeList;
