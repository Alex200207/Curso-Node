/* Una Promise en JavaScript es un objeto
 que representa el resultado futuro de una operación asíncrona.*/

const getPokemonById = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url).then((reponse) => {
    reponse.json().then((pokemon) => {
      callback(pokemon.name);
    });
  });
};

module.exports = getPokemonById;
