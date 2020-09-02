const createPokemonImage = src => {
  let pokeImage = document.createElement("IMG");
  pokeImage.src = src;
  pokeImage.id = 'image'; //change id to class
  return pokeImage;
}

const createNavigationButton = buttonId => {
  let triangle = document.createElement("LI");
  triangle.id = buttonId; //change id to class
  return triangle;
}

const createPokemonTypeInfo = typeName => {
  let typeNameElement = document.createElement("LI");
  typeNameElement.innerText = `TYPE NAME: ${typeName}`;
  return typeNameElement;
}

const createPokemonInfo = pokeInfos => {
  let container = document.createElement("div");

  let firstLi = document.createElement("LI"); // give more informational name than "firstLi", i.e. pokemonWeight
  let secondLi = document.createElement("LI"); // give more informational name
  let thirdLi = document.createElement("LI"); // give more informational name

  firstLi.innerText = `HEIGHT: ${pokeInfos.height}`;
  secondLi.innerText = `WEIGHT: ${pokeInfos.weight}`;
  thirdLi.innerText = `BASE EXPERIENCE: ${pokeInfos.base_experience}`;

  container.appendChild(firstLi);
  container.appendChild(secondLi);
  container.appendChild(thirdLi);

  const pokeTypes = pokeInfos.types
  for (let i = 0; i < pokeTypes.length; i++) {
    const newTypeNameElement = createPokemonTypeInfo(pokeTypes[i].type.name);
    container.appendChild(newTypeNameElement);
  }

  return container;
}

const createPokemonListItem = (name, url) => {
  let listElement = document.createElement("LI");
  listElement.classList.add('listElement');
  listElement.innerText = name;
  let infoButton = document.createElement("BUTTON");
  infoButton.innerText = 'INFO';
  infoButton.classList.add('infoButton');
  infoButton.addEventListener('click', () => displayPhotoAndInfo(url));
  listElement.appendChild(infoButton);
  return listElement;
}