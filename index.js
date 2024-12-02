//protocolo de intercambio
var http=require('http');
//vreando el servidor mediante el uso del protocolo http
var server=http.createServer();
//funcion o servicio web
function mensaje(req, resp){
    //json que la respuesta se describa 
    //estado 200 sastisfactorio,mensaje de texto plano configurado mediante json
    resp.writeHead(200,{'content-type': 'text/plain'});
    //escribo el mensajeen texto plano
    resp.write('Hola Mundo');
    //finalice la comunicación cliente y servidor
    resp.end();
}

server.on('request', mensaje);
server.listen(3000, function(){
    console.log("La solicitud fue realizada mediante el puerto 3000");
});

