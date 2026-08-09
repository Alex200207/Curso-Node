// adaptado el fetch con nuestro patron adaptador.

const axios = require('axios');

// const httpClientPlugin = {
//   get: async (url) => {
//     const resp = await fetch(url);
//     return await resp.json();
//   },

//   post: async (url, body) => {},
//   put: async (url, body) => {},
//   delete: async (url, body) => {},
// };

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url, body) => {},
};

module.exports = { httpClientPlugin };
