function mostrar()
{
var numeroIngresado;
var numeroAnterior;
var acumulador=0;
numeroIngresado=prompt("ingrese un numero");
numeroIngresado=parseInt(numeroIngresado);

for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
{


	for(numeroAnterior=recorrido-1;numeroAnterior>0;numeroAnterior--)
		{

			if(numeroIngresado%numeroAnterior==0)
				{
				acumulador= acumulador+numeroAnterior;
				}
		}

			if(acumulador==numeroIngresado)
		{
			console.log("es un numero perfecto" + numeroIngresado);
		} 
}		
}