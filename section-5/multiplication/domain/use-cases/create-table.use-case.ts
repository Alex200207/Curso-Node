/*
 */
// regla de negocio que fuerza a la clase a implementar algo
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

// implement obliga a la clase a usar la interfaz y retorno de datos especificos
export class CreateTable implements CreateTableUseCase {
  constructor /*
        DI: dependency injection
         */() {}
  //cada caso de uso tiene un metodo
  /*es convesionalmente llamado execute o run dependiendo  */
  execute({ base, limit = 10 }: CreateTableOptions) {
    // aqui va el caso de uso y aqui podemos usar dependencias
    // este caso de ejemplo solo crea la informacion
    let outputMessage = '';
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n `;
    }

    return outputMessage;
  }
}
