interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
}

//orquestador de como funcionara nuestra app
export class ServerApp {
  // este mtodo no necesita iniciarlizar la clase
  static run(options: RunOptions) {
    console.log('Server running...');
    console.log({options})
  }
}
