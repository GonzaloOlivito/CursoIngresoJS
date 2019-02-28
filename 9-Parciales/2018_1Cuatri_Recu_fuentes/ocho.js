function mostrar()
{
var letra;
var numero;
var respuesta="si";
var contador=0;
var numeroPar=0;
var numeroImpar=0;
var cero=0;
var acumuladorPositivo=0;
var contadorPositivos=0;
var promedioPositivos;
var sumaNegativos=0;
var maximo=100;
var minimo=-100;
while(respuesta=="si")
{
	contador=contador + 1;
	numero=prompt("Ingrese un numero entre -100 y 100");
	numero=parseInt(numero);
	while (numero<-100 || numero>100)
	{
		numero=prompt("reintente");
	}
letra=prompt("ingrese una letra");
while(!isNaN(letra))
{
	letra=prompt("eso no es una letra");
}
respuesta=prompt("quiere seguir ingresando datos?");
if(numero%2==0)
{
	numeroPar=numeroPar + 1;
}
else
{
	numeroImpar=numeroImpar + 1;	
}
if(numero>0)
{
	acumuladorPositivo=acumuladorPositivo + numero;
	contadorPositivos=contadorPositivos + 1;
}else
{ 
	if(numero<0)
	{
		sumaNegativos=sumaNegativos + numero;
	}	else
		{
			cero=cero + 1;
		}
}
	if(numero<maximo)
		{
			maximo=numero;
		}
	if(numero<minimo)
		{
			minimo=numero;
		}	
}
promedioPositivos=acumuladorPositivo/contadorPositivos;

alert("Los numeros pares son " +numeroPar+ " los impares son " +numeroImpar+ "y los ceros son " +cero+ " el promedio de los numeros positivos ingresados es " +promedioPositivos+ " y la suma de los negativos es " +sumaNegativos+ "el maximo es " +maximo+ " y el minimo es " +minimo);
}
