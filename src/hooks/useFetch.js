import { useState, useEffect } from "react";

function useFetch(fetchFunction, arrayLength = 1) {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getRecipes() {
      try {
        setLoading(true);
        setError(false);
        const randomRecipes = [];
        while (randomRecipes.length < arrayLength) {
          const recipe = await fetchFunction();
          randomRecipes.push(recipe[0]);
        }
        setRecipes(randomRecipes);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, [fetchFunction, arrayLength]);

  return { recipes, loading, error };
}

export default useFetch;
