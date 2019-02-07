/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado; 
    
	//importe = importe.value;
	importe=document.getElementById('importe').value;

	importeNeto=parseInt(importe);
	sueldoFinal=(importeNeto*0.75);


//nuevoSueldo = resultado.value;
	document.getElementById('resultado').value=sueldoFinal;

}
