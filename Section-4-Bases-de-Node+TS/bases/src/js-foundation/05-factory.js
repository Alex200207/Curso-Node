/*
Una Factory Function es una función cuya responsabilidad es crear y devolver algo, normalmente un objeto, sin necesidad de usar new.
 */
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
