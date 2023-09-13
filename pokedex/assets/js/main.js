const pokemonList = (document.getElementById('pokemonList'))
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0;

const maxRecords = 151

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
                <button  onclick="navigateToPokemonDetails('${pokemon.name}')">Get Details</button>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})



// function procurarPokemon(name) {
//     ("https://pokeapi.co/api/v2/")
//     return fetch("https://pokeapi.co/api/v2/pokemon" + name)
//         .then((response) => response.json())
//         .then((jsonBody) => jsonBody.results)
// }

// console.log(procurarPokemon)

function navigateToPokemonDetails(pokemonId) {
    // Navigate to the pokemonDetails.html page with the specific Pokémon ID
    window.location.href = `pokemon.html?id=${pokemonId}`;
}