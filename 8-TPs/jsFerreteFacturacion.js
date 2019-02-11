/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	
	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	precioEntero1=parseInt(primerPrecio);
	precioEntero2=parseInt(segundoPrecio);
	precioEntero3=parseInt(tercerPrecio);

	suma=(precioEntero1 + precioEntero2 + precioEntero3);

	alert("El total es " + suma);

}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var promedio;
	
	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	precioEntero1=parseInt(primerPrecio);
	precioEntero2=parseInt(segundoPrecio);
	precioEntero3=parseInt(tercerPrecio);

	promedio=(precioEntero1 + precioEntero2 + precioEntero3) / 3;

	alert("El promedio es " + promedio);

}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var precioParcial;
	var PrecioFinal;
	
	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	precioEntero1=parseInt(primerPrecio);
	precioEntero2=parseInt(segundoPrecio);
	precioEntero3=parseInt(tercerPrecio);

	precioParcial=(precioEntero1 + precioEntero2 + precioEntero3);
    PrecioFinal=(precioParcial*0.21) + precioParcial;
	alert("El precio final es " + PrecioFinal);

}