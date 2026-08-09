const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

const  getUserById = (id, callback) =>{
  const user = users.find((u) => u.id === id);

  if (!user) {
    return callback(new Error('User not found with id: ' + id));
  }
// de ultimo mandamos error en null y usuario
  return callback(null, user);
}

module.exports = {
  getUserById,
};
