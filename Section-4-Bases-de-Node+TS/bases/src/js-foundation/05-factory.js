/*En JavaScript, una Factory Function es simplemente una función cuya 
responsabilidad es crear otra funcion. */

// esto ya nos sirve para enviar mis depedencias en arguntos

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthday }) => {
    return {
      id: getUUID(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
};

module.exports = {
  buildMakePerson,
};
