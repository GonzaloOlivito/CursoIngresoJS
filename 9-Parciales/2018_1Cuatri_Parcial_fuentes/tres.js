function mostrar()
{
var precio;
var porcentaje;
var precioFinal;
var precioDescuento;

precio=prompt("Ingrese el precio");
porcentaje=prompt("Ingrese el porcentaje a descontar");
precio=parseInt(precio);
porcentaje=parseInt(porcentaje);

precioFinal=(precio*porcentaje) /100;
precioFinal=parseInt(precioFinal);
precioDescuento=(precioFinal+precio);
precioDescuento=parseInt(precioDescuento);

elPrecioFinal.value=precioDescuento;



}
