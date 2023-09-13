function convertPokemontoLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                    
            <span class="name">${pokemon.name}</span>
            <span class="number">${pokemon.number}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </li>
    `
}

const pokemonList = (document.getElementById('pokemonList'))

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemontoLi).join('')
})