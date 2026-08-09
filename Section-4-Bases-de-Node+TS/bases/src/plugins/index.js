const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const {httpClientPlugin} = require('./http-client.plugin')
module.exports = {
  getUUID,
  getAge,
  httpClientPlugin,
};
