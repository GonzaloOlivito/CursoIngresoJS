function mostrar()
{
var precio;
var porcentaje;
var precioFinal;

precio=prompt("Ingrese el precio");
porcentaje=prompt("Ingrese el porcentaje a descontar");
precio=parseInt(precio);
porcentaje=parseInt(porcentaje);

precioFinal=(precio*porcentaje);
precioFinal=parseInt(precioFinal);

elPrecioFinal.value=precioFinal;



}
