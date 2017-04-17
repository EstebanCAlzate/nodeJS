'use strict;'

function Coche(){
    this.rueda = 4;
    this.getRueda = function(){
        console.log('Tiene' , this.rueda); // llama al valor de la funcion
    };
}

const coche = new Coche();
coche.getRueda();

// no accede a la funcion porque no esta en la funcion
const  numRueda = coche.getRueda;
numRueda(); 