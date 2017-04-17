'use strict;'

//libreria de I/O de disco
const fs = require('fs');
const path = require('path');


//funcion que lea la version de un modulo
function versionModulo(name, callback ){
    const file = path.join('./node_modules',name,'package.json');

    fs.readFile( file, 'utf-8', function(err, datos){
        if(err){
            callback(err); //llamamamos al callback con el error
            return;
        }

        const packageJson = JSON.parse(datos); //cambiamos los datos a tipo JSON

        //llamamos al callback con el dato que nos pidieron

        callback (null, packageJson.version );
    });
};

//llamamos a la funcion

versionModulo('chance', function(err, version){
    if(err){
        console.log('error', err);
        return ;
    }
    console.log('La version de chance es: ' , version);
});