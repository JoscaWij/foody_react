import React from "react";
import List from "../component/List";
import ListItem from "../component/ListItem";
import ExpandableRecipe from "../component/ExpandableRecipe";
import useFetch from "../hooks/useFetch";

function MainRecipeList() {
  const { recipes } = useFetch();

  return (
    <main>
      {recipes?.length === 10 && (
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
      )}
    </main>
  );
}

export default MainRecipeList;
