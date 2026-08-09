// const templateExport = require('./js-foundation/01-template.js');
// console.log(templateExport);
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');

// const id = 2;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });

// require('./js-foundation/05-factory')

const getPokemoById = require('./js-foundation/06-promises');

// getPokemoById(1, (pokemon) => {
//   console.log({ pokemon });
// });

// getPokemoById(1)
//   .then((pokemon) => console.log(pokemon))
//   .catch((err) => console.log('Porfavor intente de nuevo',err))
//   .finally(() => console.log('finalizado'));

const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');

// ! Referencia a la funcion factory y uso
//! se usa inyeccion de deps aqui
// const { buildPerson } = require('./js-foundation/05-factory');

// const obj = {
//   name: 'eddy',
//   birthday: '2002-06-12',
// };
// const john = buildPerson(obj);

// console.log(john);
