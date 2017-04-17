'use strict;'

function escribeTrasDosSegundos ( texto , callback ){
    setTimeout(function() {
        console.log('texto' + texto);
        callback () ;
    }, 2000);
}

//funcion aux para bucle en serie
function serie( arrNum, fn, callback ){
    if (arrNum.length === 0 ){
        callback();
        return;
    }

    //se quita el primer elemento y se apsa a al funcion
    fn(arrNum.shift(),function (){
        serie(arrNum,fn,callback);
    });
};


serie([1,'hola',3,4,5], escribeTrasDosSegundos , function(){
    console.log('fin');
} );