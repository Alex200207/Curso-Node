// con abstract class nos aseguramos que si alguien intenta crear una instancia no pueda hacerlo
/*una clase abstracta es una plantilla o molde base del cual no se pueden crear
 objetos directamente con new, diseñada exclusivamente
 para ser heredada por otras clases que completen o extiendan su comportamiento. */

import { LogEntity, LogLevel } from '../entities/log.entity';

export abstract class LogDataSource {
  //metodo abstracto que nos obliga a implementar en las clases hijas
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogLevel): Promise<LogEntity[]>;
}


// este es un contrato que obliga a todos los data source a implementar estos metodos