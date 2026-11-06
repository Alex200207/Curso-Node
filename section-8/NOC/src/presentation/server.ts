import { CronJob } from 'cron';

export class ServerApp {
  // la palabra public esta de mas pxq a menos que pongamos
  // privado todo es publico
  //y static esto ayuda que cuando usemos nuestro server solo hacer referencia a la clase y metodo
  // evitamos instancias
  public static start() {
    console.log('Server is running...');
    // ejecucion cada 3 segundos
    const job = new CronJob('*/3 * * * * *', () => {
      const date = new Date();
      console.log('3 second', date);
    });
    job.start();
  }
}
