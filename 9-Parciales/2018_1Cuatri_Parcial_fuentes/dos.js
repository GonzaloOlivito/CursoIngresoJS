function mostrar()
{
  // alert("el precio del producto en efectivo es :$ xxxx, 
  // con tarjeta tiene un recargo del 10% que seria $xx de recargo, costandole final $xxx
var precio;
var recargo;
var precioFinal;

precio=elNombre.value;
precio=parseInt(precio);

recargo=(precio*0.1);
recargo=parseInt(recargo);
precioFinal=(precio+recargo);
precioFinal=parseInt(precioFinal);
alert("El precio del producto en efectivo es $" +precio+ " con tarjeta tiene un recargo del 10% que seria $" +recargo+ " costandole final $" +precioFinal);


 }
