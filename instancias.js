'use strict;' 
 // creamos un constructor de objetos

 function Fruta() {
     let nombre; //igual que var pero sin hosting y el scop es el bloque
     this.setNombre = function(value){
         nombre = value;
     }
     this.getNombre = function(){
         return nombre;
     }
     /*return { esto es para persnalizar la creacon de un objeto de esta manera dariamos a getNombre como si fuera un metodo privado.
         setNombre : this.setNombre;
     }*/
 }

//cramos objeto fruta
 const fruta = new Fruta();
 fruta.setNomre('Limon');

 console.log(fruta, fruta.getNombre());