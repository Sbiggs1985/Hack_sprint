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

    const apiUrl = `https://api.example.com/search?query=${encodeURIComponent(searchTerm)}`;
    
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
