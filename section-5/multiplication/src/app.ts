// los argv son argumnets values

// import { yarg } from './plugins/yargs.plugin.js';

// console.log(yarg);


// funcion anonima autoinvocada tan pronto se corra el proceso 
// se ejecutara automaticamente

(async () => {
    await main()
})()



async function main() {
    console.log('main ejecutado')
}