import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "../api/mealDB";

function useFetch() {
  const [recipes, setRecipes] = useState(null);

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

  return { recipes };
}

export default useFetch;
