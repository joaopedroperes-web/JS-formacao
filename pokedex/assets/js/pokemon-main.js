const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');



async function requestdetail () {
    const urlDetail = `https://pokeapi.co/api/v2/pokemon/${id}/`

    return fetch(urlDetail)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}


const pokemonData = document.getElementById('pokemonData')

pokemonData.innerHTML += `<ol class="pokemons">
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
                            </ol>`