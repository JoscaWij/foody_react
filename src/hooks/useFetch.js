import { useState, useEffect } from "react";

function useFetch(fetchFunction) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      const randomRecipes = [];
      while (randomRecipes.length < 10) {
        const recipe = await fetchFunction();
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
