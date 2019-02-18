function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);

switch(mesDelAño)	
{
case "Febrero":
mensaje="Este mes no tiene mas de 30 dias";

break;

default:
mensaje="Este mes tiene 30 o más días";

break;
}
alert(mensaje);





}//FIN DE LA FUNCIÓN