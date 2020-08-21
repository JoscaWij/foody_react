import React, { useEffect } from "react";
import List from "../component/List";
import ListItem from "../component/ListItem";
import ExpandableRecipe from "../component/ExpandableRecipe";
import { fetchRandomRecipes } from "../api/mealDB";

function MainRecipeList(props) {
  const [recipes, setRecipes] = React.useState(null);

  useEffect(() => {
    async function getRecipes() {
      const randomRecipes = [];
      while (randomRecipes.length < 10) {
        const recipe = await fetchRandomRecipes();
        randomRecipes.push(recipe[0]);
      }
      console.log(randomRecipes);
      setRecipes(randomRecipes);
    }
    getRecipes();
  }, []);

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
