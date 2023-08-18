const settings = {
	async: true,
	crossDomain: true,
	url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '340b6b0b2bmsh38d630a5cd772c9p15cebcjsnb3eb0ddfb0d0',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// scripts.js
$('#searchButton').on('click', function () {
    $.ajax(settings).done(function (response) {
        displayResponse(response);
    });
});

function displayResponse(response) {
    const responseContainer = $('#responseContainer');
    responseContainer.empty();

    const preElement = $('<pre>').text(JSON.stringify(response, null, 2));
    responseContainer.append(preElement);
}

// Add this code after the previous code in scripts.js

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchFood(searchTerm);
    }
});

function searchRecipesByIngredient(ingredient) {
        const apiKey = '340b6b0b2bmsh38d630a5cd772c9p15cebcjsnb3eb0ddfb0d0'; // Replace with your API key
        const apiUrl = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser=${ingredient}&apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayRecipes(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    function displayRecipes(recipes) {
        resultsContainer.innerHTML = "";

        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
            `;
            resultsContainer.appendChild(recipeCard);
        });
    };