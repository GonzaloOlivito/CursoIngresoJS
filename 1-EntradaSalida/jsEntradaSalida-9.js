/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldos;
var aumento;
var resultado;

sueldos=document.getElementById('sueldo').value;

sueldoEntero= parseInt(sueldos);

aumento = (sueldoEntero*1.10);


document.getElementById('resultado').value=aumento;

	
	
}
