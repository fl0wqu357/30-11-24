const pokemonData = [
    { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'Venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'Charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'Charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'Squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    { name: 'Wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    { name: 'Blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
    { name: 'Caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
    { name: 'Metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
    { name: 'Butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
    { name: 'Weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
    { name: 'Kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
    { name: 'Beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
    { name: 'Pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
    { name: 'Pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' },
    { name: 'Pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
    { name: 'Rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' },
    { name: 'Raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
];

const container = document.querySelector('.container');

pokemonData.forEach(pokemon => {
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h3');
    name.textContent = pokemon.name;
    card.appendChild(name);

    const link = document.createElement('a');
    link.href = pokemon.url;
    link.textContent = pokemon.url;
    link.target = '_blank';
    card.appendChild(link);

    container.appendChild(card);
});
