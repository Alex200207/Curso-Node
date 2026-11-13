import { LogEntity, LogLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

// opcionales
type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements CheckServiceUseCase {
  //inyeccion de dependencias, para que la clase no dependa de otras clases, sino de interfaces
  constructor(
    // con readonly impedimos que se pueda modificar el valor de las propiedades
    //private es para que solo se pueda acceder a las propiedades desde dentro de la clase
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback,
    // inyectamos el repositorio
    private readonly logRepository: LogRepository,
  ) {}
  async execute(url: string): Promise<boolean> {
    try {
      const log = new LogEntity(`Service ${url} working`, LogLevel.low);
      const req = await fetch(url);
      // si el successcallback existe lo manda a llamar y lo mismo con error usando &&
      req.ok
        ? this.successCallback && this.successCallback()
        : this.errorCallback && this.errorCallback('Service is down');
      this.logRepository.saveLog(log);
      return req.ok;
    } catch (err) {
      const errorString = `${url} is not ok. ${err}`;
      const log = new LogEntity(errorString, LogLevel.high);
      this.logRepository.saveLog(log);
      this.errorCallback && this.errorCallback(errorString);
      return false;
    }
  }
}
