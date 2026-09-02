import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    // opcion
    alias: 'base', // nombre de la bandera
    type: 'number', // el tipo de la bandera
    demandOption: true, // obliga a pasar la opcion
    describe: 'Multiplication table base', // descripcion
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show multiplication table',
  })

  .options('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name',
  })
  .options('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File destination',
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'Error: base must be greater than 0';
    return true;
  }) // validacion
  .parseSync();
