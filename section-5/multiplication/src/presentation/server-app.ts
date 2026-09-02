import { SaveFileUseCase } from '../../domain/use-cases/save-file.use-case.js';
interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
  destinations?: string;
  name?: string;
}

//orquestador de como funcionara nuestra app
export class ServerApp {
  // este mtodo no necesita iniciarlizar la clase
  static run({ base, limit, show, destinations, name }: RunOptions) {
    console.log('Server running...');
    const wasSaved = new SaveFileUseCase().execute({
      fileContent: `Tabla de multiplicar del ${base} hasta el ${limit}`,
      destination: destinations || './outputs',
      fileName: name || `tabla-${base}.txt`,
    });
    if (show)
      console.log(
        wasSaved ? 'File saved successfully.' : 'Failed to save file.',
      );
  }
}
