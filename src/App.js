import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app fullpage">
      <header className="headerSearch">
        <h1 className="appTitle">Foody</h1>
        <span>Foody wie bei Mutti</span>
        <input placeholder="Search for recipe"></input>
      </header>
      <main className="mealList"></main>
      <footer className="footer-copyright">
        <small>© mealAPI & JW</small>
      </footer>
    </div>
  );
}

export default App;
