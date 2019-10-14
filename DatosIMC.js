"use strict"

/*Datos de IMC en JavaScript*/

function abrir(){


alert ("VAMOS A CALCULAR SU IMC");

//variables

var altura = prompt("Especifique su altura:");
var peso = prompt("Especifique su peso:");
var imc=peso/(altura*altura); 

//eventos

if(imc < 18.5){
	alert ("Su IMC es " +imc+ ": Peso insuficiente");
}
else if(imc >18.5 && imc <24.9){
	alert ("Su IMC es " +imc+ ": Peso normal");
}
else if(imc >25 && imc <26.9){
    alert ("Su IMC es " +imc+ ": Sobrepeso Grado I");
}
else if(imc >27 && imc <29.9) {
	alert ("Su IMC es " +imc+ ": Sobrepeso Grado II");
}
else if(imc >30 && imc <34.9){
	alert ("Su IMC es " +imc+ ": Obesidad Grado I");
}
else if(imc >35 && imc <39.9){
	alert ("Su IMC es " +imc+ ": Obesidad Grado II");
}
else if(imc >40 && imc <19.9){
	alert ("Su IMC es " +imc+ ": Obesidad MORDIDA");
}
else if(imc >19.9){
    alert ("Su IMC es " +imc+ ": Obesidad EXTREMA");
}
}



