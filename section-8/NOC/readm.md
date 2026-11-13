# Repository pattern 

El Repository Pattern (Patrón Repositorio) es un patrón de diseño arquitectónico que actúa como una capa intermedia entre tu lógica de negocio (Dominio) y la fuente de datos (bases de datos, archivos locales, APIs externas, etc.).

Su objetivo principal es que el resto de tu aplicación no sepa ni le importe cómo o dónde se guardan o leen los datos, interactuando únicamente con una interfaz limpia que simula una colección de objetos en memoria.

El problema que resuelve
Sin este patrón, tus casos de uso o controladores tendrían código acoplado directamente a una tecnología específica (como fs.readFileSync, consultas SQL o métodos de Mongoose/Prisma). Si mañana decides cambiar de guardar logs en archivos .log a guardarlos en MongoDB o PostgreSQL, tendrías que reescribir toda la lógica de tu aplicación.