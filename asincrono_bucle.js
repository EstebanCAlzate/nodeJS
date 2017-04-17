'use strict;'

function escribeTrasDosSegundos ( texto , callback ){
    setTimeout(function() {
        console.log('texto' + texto);
        callback () ;
    }, 2000);
}

//funcion aux para bucle en serie
function serie( num, fn, callback ){
    if (num ==0 ){
        callback();
        return;
    }
    
    num --;
    fn(num,function (){
        serie(num,fn,callback);
    });
};


serie(5, escribeTrasDosSegundos , function(){
    console.log('fin');
} );