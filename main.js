// main.js

const BASE_URL = 'https://swapi.dev/api/';

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters');
    charactersContainer.innerHTML = '';

    characters.forEach(character => {
        const characterCard = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Height: ${character.height}</p>
                        <p class="card-text">Mass: ${character.mass}</p>
                        <p class="card-text">Gender: ${character.gender}</p>
                    </div>
                </div>
            </div>
        `;
        charactersContainer.innerHTML += characterCard;
    });
}

document.getElementById('fetch-people').addEventListener('click', async () => {
    const characters = await fetchData('people/');
    displayCharacters(characters);
});
