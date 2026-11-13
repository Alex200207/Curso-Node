import { LogDataSource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';

export class LogRepositoryImpl implements LogRepository {
  constructor(
    //inyeccion de depedencias del data source
    // ya con esto es posible cambiar de data source siempre y cuando se usen los mismo metodos
    private readonly LogDataSource: LogDataSource,
  ) {}
  async saveLog(log: LogEntity): Promise<void> {
    return this.LogDataSource.saveLog(log);
  }
  async getLogs(severityLevel: LogLevel): Promise<LogEntity[]> {
    return this.LogDataSource.getLogs(severityLevel);
  }
}
