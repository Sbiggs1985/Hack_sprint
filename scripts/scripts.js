// script.js
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');

searchInput.addEventListener('input', debounce(handleSearch, 300));

async function handleSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        resultsList.innerHTML = '';
        return;
    }

    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey={ad00caffb012448082150f6c32a9ae74}&query={search_query}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(results) {
    resultsList.innerHTML = '';
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name; // Assuming API provides a 'name' property
        resultsList.appendChild(listItem);
    });
}

function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}