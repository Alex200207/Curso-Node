
import { LogEntity, LogLevel } from '../entities/log.entity';


// el repositorio es quien nos va permitir llamar el datasource
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogLevel): Promise<LogEntity[]>;
}


