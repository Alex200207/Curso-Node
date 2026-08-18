// los argv son argumnets values

import { yarg } from './config/plugins/args.plugin.js';
import { ServerApp } from './presentation/server-app.js';

// console.log(yarg);

// funcion anonima autoinvocada tan pronto se corra el proceso
// se ejecutara automaticamente

(async () => {
  await main();
})();

// punto de entrada
async function main() {
  const { b, l, s } = yarg;
  ServerApp.run({
    base: b,
    limit: l,
    show: s,
  });
}
