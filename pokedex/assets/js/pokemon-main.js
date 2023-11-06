const UniPokeApi = {}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let offset = id - 1

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [abiliti] = abilities

    pokemon.abilities = abilities
    pokemon.abiliti = abiliti

    return pokemon
}

UniPokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

const pokemonData = document.getElementById('pokemonData')
function uniPokeDetail (pokemon) {
    return `
        <ol class="pokemon">
                <li class="pokemon ${pokemon.type}">
                        
                    <span class="name">Bulbasaur</span>
                    <span class="number">#001</span>
                    <div class="detail">
                        <ol class="types">
                            <li class="type">grass</li>
                            <li class="type">poison</li>
                        </ol>
                    </div>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
                </li>
            </ol>

            <div class="information">
                <ol class="menu">
                    <li class="options selected">About</li>
                    <li class="options">Base Stats</li>
                    <li class="options">Evolution</li>
                    <li class="options">Moves</li>
                </ol>
                <ol class="about">
                    <li class="data"><span class="ldata">Species</span><span class="rdata">Seed</span></li>
                    <li class="data"><span class="ldata">Height</span><span class="rdata">2'3."6 (0.70 cm)</span></li>
                    <li class="data"><span class="ldata">Weight</span><span class="rdata">15.2 lbs (6.9 kg)</span></li>
                    <li class="data"><span class="ldata">Abilities</span><span class="rdata">Overgrow, Chlorophyl</span></li>
                </ol>
                <h4>Breeding</h4>
                <ol class="about">
                    <li class="data"><span class="ldata">Gender</span><span class="rdata">87.5%</span><span class="rdata">12.5%</span></li>
                    <li class="data"><span class="ldata">Egg Groups</span><span class="rdata">Monster</span></li>
                    <li class="data"><span class="ldata">Egg Cycle</span><span class="rdata">Grass</span></li>
                </ol> 
            </div>
    `
}

console.log(uniPokeDetail(pokemon))


url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=1`
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => (pokemonsDetails))
    .catch((error) => console.error(error))