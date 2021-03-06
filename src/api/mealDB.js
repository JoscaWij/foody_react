export async function fetchRandomRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  const structuredResult = data.meals.map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    instructions: meal.strInstructions,
    imgSrc: meal.strMealThumb,
  }));

  const result = structuredResult.filter(
    (result, index) =>
      structuredResult.findIndex((other) => other.id === result.id) === index
  );

  return result;
}
