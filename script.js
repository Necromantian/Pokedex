const listOfPokemons = document.getElementById('listOfPokemons');
const pokeImg = document.querySelector('.pokeImg');
const infoList = document.getElementById('infoList');
const paragraph = document.getElementById('paragraph'); // give more informational name
const dateParagraph = document.getElementById('dateParagraph'); // give more informational name

const displayDateAndTime = () => {
  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  dateParagraph.innerHTML = `DATE: ${date} TIME: ${time}`;
  setTimeout(displayDateAndTime, 1000);
}

const clearPokemonInfoScreen = () => {
  infoList.innerHTML = '';
  paragraph.innerText = '';
  pokeImg.innerHTML = '';
}

const displayPhotoAndInfo = pokemonDetailsUrl => {
  fetch(pokemonDetailsUrl)
    .then(res => res.json())
    .then(pokeInfos => {
      clearPokemonInfoScreen();

      const pokemonImageSrc = pokeInfos.sprites.front_default;
      const pokemonImage = createPokemonImage(pokemonImageSrc);
      pokeImg.appendChild(pokemonImage);

      const triangleLeft = createNavigationButton('triangleLeft');
      const triangleRight = createNavigationButton('triangleRight');
      pokeImg.appendChild(triangleLeft);
      pokeImg.appendChild(triangleRight);

      paragraph.innerText = pokeInfos.name;

      const pokemonInfoComponent = createPokemonInfo(pokeInfos);
      infoList.appendChild(pokemonInfoComponent);
    });
}

window.addEventListener('load', () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  fetch(url)
    .then(response => response.json())
    .then(pokemons => {
      const pokeResults = pokemons.results;
      pokeResults.map(pokeresult => {
        const pokemonListItem = createPokemonListItem(pokeresult.name, pokeresult.url);
        listOfPokemons.appendChild(pokemonListItem);
      })
    })
    .catch(error => console.log(error));

  displayDateAndTime();
})