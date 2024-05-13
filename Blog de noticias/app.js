var express = require('express');

var app = express();

app.get('/',function(peticion, respuesta){
     respuesta.send('Ruta Inicio')
});

app.listen(3000,function(peticion, respuesta) {
    console.log("Blog de Noticias");
})