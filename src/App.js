import React, { useEffect } from "react";
import List from "./component/List";
import ListItem from "./component/ListItem";
import ExpandableRecipe from "./component/ExpandableRecipe";
import { fetchRandomRecipes } from "./api/mealDB";
import SearchBar from "./component/SearchBar";
import styled from "@emotion/styled";

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
    <AppContainer>
      <header>
        <h1>Foody</h1>
        <span>Foody wie bei Mutti</span>
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
      <footer>
        <small>© mealAPI & JW</small>
      </footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  --bg-color: rgb(211, 148, 76);
  --bg-color-dark: rgb(139, 87, 27);
  background: var(--bg-color);
  display: grid;
  grid-template-rows: auto 1fr auto;

  header {
    display: grid;
    place-items: center;
    padding-bottom: 1em;
    background-color: var(--bg-color);
  }

  header h1 {
    font-size: 3em;
    margin-bottom: 0.3em;
    font-family: "Covered By Your Grace", cursive;
  }

  header span {
    font-weight: bolder;
    padding: 0 0 1em 0;
    font-size: 1.5em;
    font-family: "Covered By Your Grace", cursive;
  }

  footer {
    background: var(--bg-color);
    text-align: center;
    color: white;
    padding: 0.5em;
  }
`;
