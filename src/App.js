import React from "react";
import "./App.css";
import List from "./component/List";
import ListItem from "./component/ListItem";

function App() {
  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span>Foody wie bei Mutti</span>
        <input placeholder="Search for recipe"></input>
      </header>
      <main className="mealList">
        <List>
          <ListItem title="Recipe" />
        </List>
      </main>
      <footer className="footer-copyright">
        <small>© mealAPI & JW</small>
      </footer>
    </div>
  );
}

export default App;
