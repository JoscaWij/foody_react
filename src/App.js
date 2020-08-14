import React, { useEffect } from "react";
import "./App.css";
import List from "./component/List";
import ListItem from "./component/ListItem";
import ExpandableRecipe from "./component/ExpandableRecipe";
import { fetchRandomRecipes, fetchRecipes } from "./api/mealDB";

function App() {
  const [recipes, setRecipes] = React.useState(null);
  const [query, setQuery] = React.useState("");

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

  const handleChange = async (event) => {
    setQuery(event.target.value);
    console.log(query);
    if (query !== null) {
      console.log(query);
      const searchedRecipe = await fetchRecipes(query);
      console.log(searchedRecipe);
    }
  };

  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span className="slogan">Foody wie bei Mutti</span>
        <input
          onChange={async (event) => await handleChange(event)}
          className="headerSearch_search"
          placeholder="Search for recipe"
        ></input>
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
