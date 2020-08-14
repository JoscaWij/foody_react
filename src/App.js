import React, { useEffect } from "react";
import "./App.css";
import List from "./component/List";
import ListItem from "./component/ListItem";
import ExpandableRecipe from "./component/ExpandableRecipe";
import { fetchRandomRecipes } from "./api/mealDB";

function App() {
  const [recipes, setRecipes] = React.useState(null);

  useEffect(() => {
    async function getRecipes() {
      const randomRecipes = [];
      while (randomRecipes.length < 10) {
        const recipe = await fetchRandomRecipes();
        console.log(recipe);
        randomRecipes.push(recipe[0]);
      }
      console.log(randomRecipes);
      setRecipes(randomRecipes);
    }
    getRecipes();
  }, []);

  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span>Foody wie bei Mutti</span>
        <input placeholder="Search for recipe"></input>
      </header>
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
      <footer className="footer-copyright">
        <small>© mealAPI & JW</small>
      </footer>
    </div>
  );
}

export default App;
