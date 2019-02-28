function mostrar()
{
var contador;
var numeroGenerado;
var contadorUno=0;
var contadorDos=0;
var contadorTres=0;
var contadorCuatro=0;
var contadorCinco=0;
var contadorSeis=0;
var contadorSiete=0;
var contadorOcho=0;
var contadorNueve=0;
var contadorDiez=0;

for(contador=0;contador<10000;contador++)
{
	numeroGenerado=Math.floor(Math.random()*10)+1;
	console.log(numeroGenerado);

switch(numeroGenerado)
{
	case 1:
	contadorUno++;

	break;
	case 2:
	contadorDos++;
	break;
	case 3:
	contadorTres++;
	break;
	case 4:
	contadorCuatro++;
	break;
	case 5:
	contadorCinco++;	
	break;
	case 6:
	contadorSeis++;
	break;
	case 7:
	porcen=contadorSiete*100/contador;
	if(porcen>6) 
	{
		contador --;
		continue;
	}
	contadorSiete++;
	break;
	case 8:
	contadorOcho++;
	break;
	case 9:
	contadorNueve++;
	break
	case 10:
	contadorDiez++;
	break;

	
}
}

console.log("el uno salio " +contadorUno+ " veces " +contadorUno*100/contador+ "%");
console.log("el dos salio " +contadorDos+ " veces " +contadorDos*100/contador+ "%");
console.log("el tres salio " +contadorTres+ " veces " +contadorTres*100/contador+ "%");
console.log("el cuatro salio " +contadorCuatro+ " veces " +contadorCuatro*100/contador+ "%");
console.log("el cinco salio " +contadorCinco+ " veces " +contadorCinco*100/contador+ "%");
console.log("el seis salio " +contadorSeis+ " veces " +contadorSeis*100/contador+ "%");
console.log("el siete salio " +contadorSiete+ " veces " +contadorSiete*100/contador+ "%");
console.log("el ocho salio " +contadorOcho+ " veces " +contadorOcho*100/contador+ "%");
console.log("el nueve salio " +contadorNueve+ " veces " +contadorNueve*100/contador+ "%");
console.log("el diez salio " +contadorDiez+ " veces " +contadorDiez*100/contador+ "%");

}