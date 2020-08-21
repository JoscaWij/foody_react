import React, { useEffect } from "react";
import "./App.css";
import List from "./component/List";
import ListItem from "./component/ListItem";
import ExpandableRecipe from "./component/ExpandableRecipe";
import { fetchRandomRecipes } from "./api/mealDB";
import SearchBar from "./component/SearchBar";

function App() {
  const [recipes, setRecipes] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span className="slogan">Foody wie bei Mutti</span>
        <SearchBar
          value={searchQuery}
          onChange={(query) => handleSearch(query)}
        />
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
