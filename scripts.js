<<<<<<< HEAD
const searchMeal = async (e) => {
    e.preventDefault();
  
    // Select Elements
    const input = document.querySelector(".input");
    const title = document.querySelector(".title");
    const info = document.querySelector(".info");
    const img = document.querySelector(".img");
    const ingredientsOutput = document.querySelector(".ingredients");
  
    const showMealInfo = (meal) => {
      const { strMeal, strMealThumb, strInstructions } = meal;
      title.textContent = strMeal;
      img.style.backgroundImage = `url(${strMealThumb})`;
      info.textContent = strInstructions;
  
      const ingredients = [];
  
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }
  
      const html = `
      <span>${ingredients
        .map((ing) => `<li class="ing">${ing}</li>`)
        .join("")}</span>
      `;
  
      ingredientsOutput.innerHTML = html;
    };
  
    const showAlert = () => {
      alert("Meal not found :(");
    };
  
    // Fetch Data
    const fetchMealData = async (val) => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
      );
  
      const { meals } = await res.json();
      return meals;
    };
  
    // Get the user value
    const val = input.value.trim();
  
    if (val) {
      const meals = await fetchMealData(val);
  
      if (!meals) {
        showAlert();
        return;
      }
  
      meals.forEach(showMealInfo);
    } else {
      alert("Please try searching for meal :)");
    }
  };
  
  const form = document.querySelector("form");
  form.addEventListener("submit", searchMeal);
  
  const magnifier = document.querySelector(".magnifier");
  magnifier.addEventListener("click", searchMeal);
=======
$(document).ready(function () {
    $('#searchButton').on('click', function () {
        const searchTerm = $('#searchInput').val().trim();
        if (searchTerm) {
            searchRecipesByIngredient(searchTerm);
        }
    });
});

function searchRecipesByIngredient(ingredient) {
    const apiKey = '340b6b0b2bmsh38d630a5cd772c9p15cebcjsnb3eb0ddfb0d0';
    const apiUrl = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?q=${ingredient}`;

    const settings = {
        async: true,
        crossDomain: true,
        url: apiUrl,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '340b6b0b2bmsh38d630a5cd772c9p15cebcjsnb3eb0ddfb0d0',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        },
        dataType: 'json'
    };

    $.ajax(settings).done(function (response) {
        displayRecipes(response.hints);
    });
}

function displayRecipes(recipes) {
    const resultsContainer = $('#resultsContainer');
    resultsContainer.empty();

    recipes.forEach(recipe => {
        const recipeCard = $('<div>').addClass('recipe-card');
        const recipeImage = $('<img>').attr('src', recipe.food.image).attr('alt', recipe.food.label);
        const recipeTitle = $('<h2>').text(recipe.food.label);
        
        // Append the image and title to the recipe card
        recipeCard.append(recipeImage, recipeTitle);

        // Append the recipe card to the results container
        resultsContainer.append(recipeCard);
    });
}
>>>>>>> 8f3404ca5543fb8d59fbc329632358a8187b749c
