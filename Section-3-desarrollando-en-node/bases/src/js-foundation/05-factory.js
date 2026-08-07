/*Las factory functions son funciones 
que crea una funcion
*/

// objetivo: deberiamos ser capaces de tener dependencias en nuestro codigo

const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ({ name, birthday }) => {
  return {
    id: v4(),
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
