const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClientPlugin } = require('./http-client.plugin');
const  buildLogger  = require('./loger.pluging');
module.exports = {
  getUUID,
  getAge,
  httpClientPlugin,
  buildLogger,
};
