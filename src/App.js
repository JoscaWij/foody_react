import React from "react";
import SearchBar from "./component/SearchBar";
import styled from "@emotion/styled";
import MainRecipeList from "./pages/MainRecipeList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <Router>
      <AppContainer>
        <header>
          <h1>Foody</h1>
          <span>Foody wie bei Mutti</span>
          <SearchBar
            value={searchQuery}
            onChange={(query) => handleSearch(query)}
          />
        </header>
        <Switch>
          <Route path="/recipes">
            <MainRecipeList />
          </Route>
          <Route path="/recipe">
            <div>Details</div>
          </Route>
          <Route path="/">
            <Redirect to="/recipes" />
          </Route>
        </Switch>
        <footer>
          <small>© mealAPI & JW</small>
        </footer>
      </AppContainer>
    </Router>
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
