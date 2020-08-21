import { useState, useEffect } from "react";

function useFetch(fetchFunction, arrayLength = 1) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      const randomRecipes = [];
      while (randomRecipes.length < arrayLength) {
        const recipe = await fetchFunction();
        randomRecipes.push(recipe[0]);
      }
      setRecipes(randomRecipes);
    }
    getRecipes();
  }, [fetchFunction, arrayLength]);

  return { recipes };
}

export default useFetch;
