// Las entidades son las clases que representan los objetos principales de negocio y los datos que manejaremos en la aplicación (y que eventualmente irán a una base de datos).
// En este caso, la entidad LogEntity representa un registro de auditoría o evento ocurrido en el sistema.

// 'export' permite que este enum sea importado y utilizado en otros archivos del proyecto.
// 'enum' (enumeración) define un conjunto de constantes con nombre para restringir los valores posibles de una variable.
export enum LogLevel {
  low = 'low', // Nivel de gravedad bajo (ej. información general o depuración).
  medium = 'medium', // Nivel de gravedad medio (ej. advertencias que no detienen el sistema).
  high = 'high', // Nivel de gravedad alto (ej. errores críticos que requieren atención inmediata).
}

// Definimos y exportamos la clase 'LogEntity', que servirá como molde para crear objetos de tipo Log.
export class LogEntity {
  // --- PROPIEDADES DE LA CLASE ---
  // 'public' indica que estas propiedades pueden ser leídas y modificadas desde fuera de la clase.
  public level: LogLevel; // Almacena la severidad del log; su tipo está restringido únicamente a los valores del enum LogLevel.
  public message: string; // Almacena la descripción o el mensaje detallado de lo que ocurrió.
  public createdAt: Date; // Almacena la fecha y hora exacta en la que se generó el registro.

  // --- CONSTRUCTOR ---
  // Método especial que se ejecuta automáticamente al hacer 'new LogEntity(...)'.
  // Recibe el mensaje y el nivel de severidad como parámetros obligatorios.
  constructor(message: string, level: LogLevel) {
    this.message = message; // Asigna el parámetro 'message' a la propiedad 'message' de esta instancia.
    this.level = level; // Asigna el parámetro 'level' a la propiedad 'level' de esta instancia.
    this.createdAt = new Date(); // Inicializa 'createdAt' automáticamente con la fecha y hora actual del sistema.
  }

  // --- FACTORY CONSTRUCTOR (MÉTODO DE FÁBRICA) ---
  // 'static' permite llamar a este método directamente desde la clase (LogEntity.fromJson(...)) sin necesidad de usar 'new' antes.
  // Recibe una cadena de texto en formato JSON y promete devolver una instancia completa de 'LogEntity'.
  static fromJson = (json: string): LogEntity => {
    // Convierte el string JSON a un objeto de JavaScript y extrae sus propiedades mediante desestructuración.
    const { message, level, createdAt } = JSON.parse(json);

    // Crea una nueva instancia de LogEntity usando los datos extraídos (nota: aquí 'createdAt' se crea temporalmente con la fecha actual).
    const log = new LogEntity(message, level);

    // Sobrescribe la fecha actual con la fecha original que venía guardada en el JSON, convirtiéndola de string a un objeto Date real.
    log.createdAt = new Date(createdAt);

    // Retorna la instancia de LogEntity ya reconstruida y lista para usarse en la aplicación.
    return log;
  };
}

// Al tener esta entidad, podemos crear instancias estandarizadas y gobernar las reglas de negocio de los logs en toda la aplicación.
