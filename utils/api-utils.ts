export const toJSON = (_: Response) => _.json();

export const getPokemon = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=21').then(toJSON);
