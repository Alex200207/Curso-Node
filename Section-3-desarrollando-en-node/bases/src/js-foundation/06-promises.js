/* Una Promise en JavaScript es un objeto
 que representa el resultado futuro de una operación asíncrona.*/

// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(url).then((reponse) => {
//     reponse.json().then((pokemon) => {
//       callback(pokemon.name);
//     });
//   });
// };

// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(url)
//     .then((reponse) => {
//       return reponse.json();
//     })
//     .then((pokemon) => {
//       callback(pokemon.name);
//     });
// };


const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  //retornar una promesa
  return fetch(url)
   .then((resp) => resp.json())
   .then((pokemon) => pokemon.name)
};


module.exports = getPokemonById;
