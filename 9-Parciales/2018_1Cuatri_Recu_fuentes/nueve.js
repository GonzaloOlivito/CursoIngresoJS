function mostrar()
{
var nombreAnimal;
var pesoAnimal;
var temperaturaHabitat;
var respuesta="si";
var temperaturaPar=0;
var pesoMaximo=1;
var pesoMinimo=1000;
var temperaturaPesado;
var nombrePesado;

for(cantidadAnimales=0;respuesta=="si";cantidadAnimales++)
	while(respuesta=="si")
	{
		cantidadAnimales=cantidadAnimales + 1;
		nombreAnimal=prompt("ingrese el nombre del animal");

		pesoAnimal=prompt("ingrese el peso del animal");
		pesoAnimal=parseInt(pesoAnimal);
		while(pesoAnimal<1 || pesoAnimal>1000)
			{
				pesoAnimal=prompt("peso no valido, reintente");
			}
	temperaturaHabitat=prompt("ingrese la temperatura del habitat");
	temperaturaHabitat=parseInt(temperaturaHabitat);
		while(temperaturaHabitat<-30 || temperaturaHabitat>30)
			{
				temperaturaHabitat=prompt("temperatura no valida, reintente");
			}
	
	respuesta=prompt("quiere seguir ingresando datos?");

	if(temperaturaHabitat%2==0)
		{
			temperaturaPar=temperaturaPar+1;
		}
	if(pesoAnimal>pesoMaximo)
		{
			pesoMaximo=pesoAnimal;
			nombrePesado=nombreAnimal;
			temperaturaPesado=temperaturaHabitat;
		}
	if(tem)	

	}
	alert("el peso es" +pesoMaximo+ "el nombre " +nombrePesado+ " y la temp " +temperaturaPesado);
}
