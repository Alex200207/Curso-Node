// aplicando patron adaptador al paquete get-age

const getAgePlugin = require('get-age');

const getAge = (birthday) => {
  if (!birthday) return new Error('birthdate is required');

  return getAgePlugin(birthday);
};

module.exports = {
  getAge,
};
