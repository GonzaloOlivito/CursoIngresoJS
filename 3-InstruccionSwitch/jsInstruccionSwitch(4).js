function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)	
{
case "Febrero":
mensaje="Este mes tiene 28 dias";

break;
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":

mensaje="Este mes tiene 31 días"

break;


default:
mensaje="Este mes tiene 30 días";

break;
}
alert(mensaje);




}//FIN DE LA FUNCIÓN