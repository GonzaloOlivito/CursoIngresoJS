function mostrar()
//al realizar una compra, 
//si compra de mas de dos se realiza un descuento del 10%,  
//si supera los $2000 se agrega un dscuento adicional de %15, 
//si el pago es con tarjeta y no efectivo, al precio final se le agrega un %10 de recargo
{
	var compra;
	var valorCompra;
	var formaDePago;
	var valorFinal;
	var importeFinal;
compra=prompt("Ingrese cantidad de productos comprados");
valorCompra=prompt("Ingrese cuanto le costo la compra");
formaDePago=prompt("¿Pago en efectivo o con tarjeta?");

if(compra>2)
{
	
 	if(valorCompra>2000)
 	{
 		importeFinal=(valorCompra*0.75);
 	} else
 	{
 		importeFinal=valorCompra*0.9;
 	}
 	if(formaDePago=="tarjeta")
 	{
 		importeFinal=(importeFinal*1.10);

 	}
 	alert("El precio final es "+importeFinal);
	}


}
 		



