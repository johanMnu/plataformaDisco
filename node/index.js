/*let http = require("http");
let fs= require("fs");

http.createServer(function(req,res){
    res.writeHead(200,{
     "content-type": "text/html",
     "acces-control-allow-origin": "*"   
    })

    let readStream = fs.createReadStream(__dirname + '/index.html')
    readStream.pipe(res);
    console.log("estamos visitando el sitio http://localhost:3000")
}).listen(3000);*/

//crear un servidor web usando express

//instanciamos los paquetes necesarios
let express = require("express");
let app = express();
//aca especificamos la ruta y metodo de la peticion
app.get('/inicio',function(req,res){
     //enviar el archivo
     res.sendFile(__dirname + "/index.html");

});
app.get('/contacto',function(req,res){
    res.send("contactenos");
})
app.get('/saludo/:nombre',function(req,res){
    let nombre = req.params.nombre //capturo el parametro nombre enviado por la url
    res.send("hola " + nombre);//respuesta del servidor
})
//action del form sea httt://localhost:3000/formulario
app.get('/formulario',function(req,res){
    res.send("contactenos");
})
//escuchar el puerto 3000
app.listen(3000);
