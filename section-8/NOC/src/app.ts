import { ServerApp } from './presentation/server';

export const name: string = 'Alex';

console.log(`Hello, ${name}!`);

(async () => {
  main();
})();

function main() {
  ServerApp.start();
}
