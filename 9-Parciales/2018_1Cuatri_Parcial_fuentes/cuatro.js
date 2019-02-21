
//al realizar una compra, 
//si compra de mas de dos se realiza un descuento del 10%,  
//si supera los $2000 se agrega un dscuento adicional de %15, 
//si el pago es con tarjeta y no efectivo, al precio final se le agrega un %10 de recargo
/* {
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
*/

function mostrar()


//Ingresar 4 importes
// PRimero mostrar el mayor
// Despues hay que sumar los 4 importes y si supera los $100 hay que hacer 10%
// Si supera los $50 un %5
// Si la suma es menor a 50 tiene un 15% de recargo
{

	var primerImporte;
	var segundoImporte;
	var tercerImporte;
	var cuartoImporte;
	var importeMayor;
	var sumaDeImportes;
	var recuento;
	
	primerImporte=prompt("Ingrese el primer importe");
	segundoImporte=prompt("Ingrese el segundo importe");
	tercerImporte=prompt("Ingrese el tercer importe");
	cuartoImporte=prompt("Ingrese el cuarto importe");
	primerImporte=parseInt(primerImporte);
	segundoImporte=parseInt(segundoImporte);
	tercerImporte=parseInt(tercerImporte);
	cuartoImporte=parseInt(cuartoImporte);
	sumaDeImportes=primerImporte+segundoImporte+tercerImporte+cuartoImporte;

	if (primerImporte>segundoImporte && primerImporte>tercerImporte && primerImporte>cuartoImporte)

	{
		importeMayor=primerImporte;
	}	else	

	if (segundoImporte>primerImporte && segundoImporte>tercerImporte && segundoImporte>cuartoImporte)
	{
		importeMayor=segundoImporte;
	}	else	

	if (tercerImporte>primerImporte && tercerImporte>segundoImporte && tercerImporte>cuartoImporte)
	{
		importeMayor=tercerImporte;
	}	else	

	if (cuartoImporte>primerImporte && cuartoImporte>segundoImporte && cuartoImporte>tercerImporte)
	{
		importeMayor=cuartoImporte;
	} else

		importeMayor=" todos ya que son todos los importes iguales";

	if (sumaDeImportes>100)

	{
		recuento=0.9;
	} else

	if (sumaDeImportes>50 && sumaDeImportes<100)
	{
		recuento=0.95;
	} else
	if (sumaDeImportes<50)
	{
		recuento=1.15;
	} 

	sumaDeImportes=recuento*sumaDeImportes;

	alert("el precio mayor de los productos es " +importeMayor+  " y el precio final es " +sumaDeImportes);

}


