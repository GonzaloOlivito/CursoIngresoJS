/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldos;
var resultados;
var aumento;

sueldos=sueldo.value;


sueldos=parseInt(sueldos);

resultados=sueldos*1.10;

resultado.value=resultados;



}
