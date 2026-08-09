/*Las factory functions son funciones 
que crea una funcion
*/

// objetivo: deberiamos ser capaces de tener dependencias en nuestro codigo

const buildPerson = ({ name, birthday }) => {
  return {
    id: new Date().getTime(),
    name,
    birthday,
    age: new Date().getFullYear() - new Date(birthday).getFullYear(),
  };
};

const obj = {
  name: 'eddy',
  birthday: '2002-06-12',
};
const john = buildPerson(obj);

console.log(john);
