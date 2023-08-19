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