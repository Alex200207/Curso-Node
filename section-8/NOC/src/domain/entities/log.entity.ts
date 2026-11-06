// las entidades son quienes representan los datos que se van a almacenar en la base de datos, en este caso, la entidad Log representa un registro de log que contiene información sobre las acciones realizadas en el sistema.

export enum LogLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export class LogEntity {

    // declaramos las propiedades de la entidad LogEntity, que son level, message y createdAt. level es de tipo LogLevel, message es de tipo string y createdAt es de tipo Date.
  public level: LogLevel; //num
  public message: string;
  public createdAt: Date;

  // inicializamos las propiedades de la entidad LogEntity en el constructor, que recibe como parámetros un mensaje y un nivel de log. El mensaje se asigna a la propiedad message, el nivel se asigna a la propiedad level y la fecha de creación se asigna a la propiedad createdAt con la fecha actual.

  constructor(message: string, level: LogLevel) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }
}
// esto nos permitira crear instancias y gobernar la aplicacion