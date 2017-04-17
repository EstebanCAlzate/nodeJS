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
//const  numRueda = coche.getRueda; //coche.getRuedas.bind(coche); de esta manera le pones un this fijo y que no cambie
const  numRueda = coche.getRueda.bind(coche);
numRueda(); 

//setTimeout(coche.getRueda,2000); sale undefined porque la funcion la llama timeOUT y no tiene capacidad para entrar


//const camion = { rueda:8, getRueda: coche.getRueda} 
//camion.getRueda();