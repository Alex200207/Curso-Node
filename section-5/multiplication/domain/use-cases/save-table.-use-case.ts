import fs from 'fs';

export interface SaveFileInterface {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveTableUseCase implements SaveFileInterface {
  //injeccion de depedencias
  constructor(/*repository: StorageRepository*/) {}

  execute({ fileContent, destination, fileName }: Options): boolean {
    try {
      const ouputPath = destination || `outputs`;
      fs.mkdirSync(ouputPath, { recursive: true });
      fs.writeFileSync(`${ouputPath}/${fileName || 'tabla.txt'}`, fileContent);
      return true;
    } catch (err) {
      console.error('Error saving file:', err);
      return false;
    }
  }
}
