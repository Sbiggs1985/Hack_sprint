document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("resultsContainer");

searchButton.addEventListener("click", async () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    const recipes = await fetchRecipes(searchTerm);
    displayRecipes(recipes);
  }
});

async function fetchRecipes(query) {
  const apiKey = "ad00caffb012448082150f6c32a9ae74"; // Replace with your actual API key
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

function displayRecipes(recipes) {
  resultsContainer.innerHTML = "";

  recipes.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}">
      <p>Ready in ${recipe.readyInMinutes} minutes</p>
    `;
    resultsContainer.appendChild(recipeCard);
  });
}