// const templateExport = require('./js-foundation/01-template.js');
// console.log(templateExport);
// require('./js-foundation/02-destructuring');
const { getUserById } = require('./js-foundation/03-callbacks');

const id = 2;
getUserById(id, (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});
