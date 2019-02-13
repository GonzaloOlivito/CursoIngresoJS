function mostrar()
{
var precio;
var porcentaje;
var precioFinal;
var precioDescuento;
var descuento;

precio=prompt("Ingrese el precio");
porcentaje=prompt("Ingrese el porcentaje a descontar");

precio=parseInt(precio);
porcentaje=parseInt(porcentaje);

descuento=(precio*porcentaje) /100;
precioFinal=parseInt(descuento);
precioDescuento=(precio-descuento);
precioDescuento=parseInt(precioDescuento);

elPrecioFinal.value=precioDescuento;



}
