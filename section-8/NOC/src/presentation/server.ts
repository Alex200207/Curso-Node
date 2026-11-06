export class ServerApp {

    // la palabra public esta de mas pxq a menos que pongamos 
    // privado todo es publico 
    //y static esto ayuda que cuando usemos nuestro server solo hacer referencia a la clase y metodo
    // evitamos instancias
    public static start() {
        console.log('Server is running...');
    }

}