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

// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   //retornar una promesa
//   return fetch(url)
//    .then((resp) => resp.json())
//    .then((pokemon) => pokemon.name)
// };

// async transforma valor de retorno a promesa
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // el await es codigo bloqueante pues no permite avanzar hasta resolver
  const resp = await fetch(url);
  const pokemon = await resp.json();

  return pokemon.name;
};
module.exports = getPokemonById;
