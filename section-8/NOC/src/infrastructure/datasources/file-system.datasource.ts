import { LogDataSource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogLevel } from '../../domain/entities/log.entity';
import * as fs from 'node:fs';

export class FileSystemDataSource implements LogDataSource {
  private readonly logPath = 'logs/';
  private readonly allLogsPath = 'logs/logs-all.log';
  private readonly lowLogsPath = 'logs/logs-low.log';
  private readonly mediumLogsPath = 'logs/logs-medium.log';
  private readonly highLogsPath = 'logs/logs-high.log';

  constructor() {
    // cuando se instancia la clase FileSystemDataSource, se llama al método createLogFiles() para crear los archivos de registro si no existen. Esto asegura que los archivos de registro estén disponibles antes de intentar guardar o recuperar registros.
    this.createLogFiles();
  }

  // verificamos si existe la carpeta logs, si no existe la creamos
  private createLogFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    // if (!fs.existsSync(this.allLogsPath)) {
    //   fs.writeFileSync(this.allLogsPath, '');
    // }
    // if (!fs.existsSync(this.lowLogsPath)) {
    //   fs.writeFileSync(this.lowLogsPath, '');
    // }
    // if (!fs.existsSync(this.mediumLogsPath)) {
    //   fs.writeFileSync(this.mediumLogsPath, '');
    // }
    // if (!fs.existsSync(this.highLogsPath)) {
    //   fs.writeFileSync(this.highLogsPath, '');
    // }

    // aplicando dry
    // iteramos sobre un array de rutas de archivos de registro y verificamos si cada archivo existe. Si no existe, se crea un archivo vacío en esa ruta. Esto asegura que todos los archivos de registro necesarios estén presentes antes de intentar guardar o recuperar registros.
    [
      this.allLogsPath,
      this.lowLogsPath,
      this.mediumLogsPath,
      this.highLogsPath,
    ].forEach((path) => {
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '');
      }
    });
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;

    // anade una linea al final del archivo de registro correspondiente según el nivel de severidad del log. La línea contiene la fecha y hora actual, el nivel de severidad y el mensaje del log. Esto permite almacenar los logs en archivos separados según su nivel de severidad.
    fs.appendFileSync(this.allLogsPath, logAsJson);

    if (newLog.level === LogLevel.low) return;

    if (newLog.level === LogLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogsPath, logAsJson);
    }
  }
  getLogs(severityLevel: LogLevel): Promise<LogEntity[]> {
    throw new Error('Method not implemented.');
  }
}
