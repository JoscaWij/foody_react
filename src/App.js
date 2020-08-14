import React from "react";
import "./App.css";
import List from "./component/List";
import ListItem from "./component/ListItem";
import ExpandableRecipe from "./component/ExpandableRecipe";

function App() {
  const [recipes, setRecipes] = React.useState(null);

  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span>Foody wie bei Mutti</span>
        <input placeholder="Search for recipe"></input>
      </header>
      <main>
        <List>
          <ListItem title="Recipe">
            <ExpandableRecipe />
          </ListItem>
        </List>
      </main>
      <footer className="footer-copyright">
        <small>© mealAPI & JW</small>
      </footer>
    </div>
  );
}

export default App;
