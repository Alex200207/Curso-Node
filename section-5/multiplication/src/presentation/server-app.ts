import { CreateTable } from '../../domain/use-cases/create-table.use-case.js';

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
}

//orquestador de como funcionara nuestra app
export class ServerApp {
  // este mtodo no necesita iniciarlizar la clase
  static run({ base, limit, show }: RunOptions) {
    console.log('Server running...');
    const table = new CreateTable().execute({ base, limit });
    if(show) console.log(table)
  }
}
