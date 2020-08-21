import { useState, useEffect } from "react";

function useFetch(fetchFunction, arrayLength = 1) {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipes() {
      setLoading(true);
      const randomRecipes = [];
      while (randomRecipes.length < arrayLength) {
        const recipe = await fetchFunction();
        randomRecipes.push(recipe[0]);
      }
      setRecipes(randomRecipes);
      setLoading(false);
    }
    getRecipes();
  }, [fetchFunction, arrayLength]);

  return { recipes, loading };
}

export default useFetch;
