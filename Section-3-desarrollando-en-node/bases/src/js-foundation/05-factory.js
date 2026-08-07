/*Las factory functions son funciones 
que crean y retornan objetos.
*/

// objetivo: deberiamos ser capaces de tener dependencias en nuestro codigo

const { getUUID, getAge } = require('../plugins');

const buildPerson = ({ name, birthday }) => {
  return {
    id: getUUID(),
    name,
    birthday,
    age: getAge(birthday),
  };
};

const obj = {
  name: 'eddy',
  birthday: '2002-06-12',
};
const john = buildPerson(obj);

console.log(john);
