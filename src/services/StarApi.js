export const getPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(url).then((elm) => elm.json());
  return results;
};

export const getPlanetsKeys = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(url).then((elm) => elm.json());
  const dataFilter = Object.keys(results[0] || {}).filter((key) => key !== 'residents');
  return dataFilter;
};
