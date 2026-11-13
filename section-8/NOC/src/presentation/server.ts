import { CronJob } from 'cron';
import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infrastructure/repository/log-impl.repository';
import { FileSystemDataSource } from '../infrastructure/datasources/file-system.datasource';

// instancias de las implementacion

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource(),
);

export class ServerApp {
  // la palabra public esta de mas pxq a menos que pongamos
  // privado todo es publico
  //y static esto ayuda que cuando usemos nuestro server solo hacer referencia a la clase y metodo
  // evitamos instancias
  public static start() {
    console.log('Server is running...');
    // ejecucion cada 3 segundos
    // const job = new CronJob('*/3 * * * * *', () => {
    //   const date = new Date();
    //   console.log('3 second', date);
    // });
    // job.start();

    // lo llamamos desde el cron service
    CronService.createJob('*/3 * * * * *', () => {
      new CheckService(
        () => console.info('Service is up'),
        (error: string) => console.error(error),
        // undefined,
        // undefined,
        fileSystemLogRepository,
      ).execute('http://localhost:3000');
    });
  }
}
