## Que es nodeJs?

Es un Runtime environmentt

Nodejs es basicamente un ambiente de ejecucion para ejecutra Js desligado del navegador web.

Que lo hace especial

Motor:

Codigo habierto con el motor v8 de google y esta disenado para realizar tareas de E/S (Entrada y salida) junto con el manejo de archivos de la computadora cliente/Servidor.

### Caracteristicas

- Asincrono
- Modulos nativos y de terceros
- Gestion de paquetes con NPM
- Construccion de servidores
- Escabilidad
- Multiple plataforma

## Non-blocking I/O

Casi ninguna funcion en node bloquea la lectura , por lo que podemos tener cientos de peticiones sin bloquear el servidor.

## Libuv

Gracias a esta libreria no se ejecutan varios procesos en paralelo.

## I/O Entrada/Salida

Se refiere principalmente a la interaccion con el disco duro del sistema.

## Blocking

Basicamente cuando la ejecucion del codigo debe de esperar a que se complete el proceso pero este a su ves , impide que se sigan ejecutando otras instrucciones.


https://nodejs.org/learn/asynchronous-work/overview-of-blocking-vs-non-blocking