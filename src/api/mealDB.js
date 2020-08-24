/* export async function fetchRandomRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  const result = data.meals.map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    instructions: meal.strInstructions,
    imgSrc: meal.strMealThumb,
  }));

  console.log(result[0]);

  return result; 
}
*/

export async function fetchRandomRecipes() {
  const randomRecipes = [];
  while (randomRecipes.length < 10) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    randomRecipes.push(data.meals[0]);
  }
  const recipes = randomRecipes.map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    instructions: meal.strInstructions,
    imgSrc: meal.strMealThumb,
  }));

  /*   const recipes = recipeData.filter(
    (recipe, index) =>
      recipeData.findIndex((other) => other.id === recipe.id) === index
  ); */

  console.log(recipes);

  return recipes;
}
