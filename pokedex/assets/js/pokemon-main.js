const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const urlDetail = `https://pokeapi.co/api/v2/pokemon/${id}/`

const pokemonData = document.getElementById('pokemonData');

function getTypes(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function getAbilities(pokemonAbilities) {
    return pokemonAbilities.map((abilitySlot) => `${abilitySlot.ability.name}`)
}

function getTypesColor(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `${typeSlot.type.name}`)
}

fetch(urlDetail)
    .then((response) => response.json())
    .then((jsonBody) => {
        const pokemon = jsonBody;

        const pokemonElement = document.createElement('li')
        pokemonElement.classList.add('pokemon')  

        const firstType = pokemon.types.filter((type) => type.slot === 1)[0]
        const typesString = firstType.type.name

        pokemonElement.innerHTML = `
        <li class="fixer ${typesString}">
                <ol class="pokemons">
                <li class="pokemon ${typesString}">
                        
                    <span class="name">${pokemon.name}</span>
                    <span class="number">${pokemon.id}</span>
                    <div class="detail">
                        <ol class="types">
                            ${getTypes(pokemon.types).join('')}
                        </ol>
                    </div>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
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
                    <li class="data"><span class="ldata">Height</span><span class="rdata">${pokemon.height} cm</span></li>
                    <li class="data"><span class="ldata">Weight</span><span class="rdata">${pokemon.weight} lbs</span></li>
                    <li class="data"><span class="ldata">Abilities</span><span class="rdata">${getAbilities(pokemon.abilities).join(', ')}</span></li>
            </li>
            
        `;

        pokemonData.appendChild(pokemonElement);
    })
    .catch((error) => console.error(error))