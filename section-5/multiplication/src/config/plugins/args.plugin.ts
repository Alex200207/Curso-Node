import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    // opcion
    alias: 'base',// nombre de la bandera
    type: 'number',// el tipo de la bandera
    demandOption: true,// obliga a pasar la opcion
    describe:'Multiplication table base'// descripcion
  })
  .parseSync();
