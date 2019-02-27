function mostrar()
{
var letra;
var numero;
var respuesta;
var contador=0;
while(respuesta=="si")
{
	contador=contador + 1;
	numero=prompt("Ingrese un numero entre -100 y 100");
	numero=parseInt(numero);
	while (numero<-100 || numero>100)
	{
		numero=prompt("reintente");
	}

}
}