const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonsDetails = (pokemon) => {
        console.log("Clicado", pokemon)
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => (pokemonsDetails))
        .catch((error) => console.error(error))
}

pokeApi.getPokemonDetails = (pokemon) => {
    console.log(pokemon)
    const url = `https://pokeapi.co/api/v2/pokemon/` + pokemon
    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonsDetails) => (pokemonsDetails))
        .catch((error) => console.error(error))
}

window.onload = function () {
    myFunction();
}