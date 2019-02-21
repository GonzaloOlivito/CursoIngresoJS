function mostrar()
{
// cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, 
// - si es coon tarjeta visa un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo un 20% y cualquier otro medio 5%
// si compraste el paquete "todoIncluido" y pagas con Paypal se te suma un 10% al descuento
// si pagas en efectivo tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento
// si el paquete es "todoIncluido" te suma 15% y para el resto de los paquetes no tiene descuento adicional

var precioHabitacion;
var tipoDePago;
var tarjetas;
var mensaje;
var paquete;
var descuento;
var precioFinal;
precioHabitacion=prompt("Ingrese el precio de la habitacion");
precioHabitacion=parseInt(precioHabitacion);

tipoDePago=prompt("Ingrese el medio de pago");
paquete=prompt("Elija el paquete deseado" );


switch(tipoDePago)
	{ 
	case "Visa":
	case "MercadoPago":
	descuento=0.9;
	case "Otro":
	descuento=0.95;
	case "Paypal":
	switch(paquete)
	{ 
	case "Todo incluido":
	descuento=0.75;
	break;
	default:
	descuento=0.85;
	}
	break;
	
	case "Efectivo":
	switch(paquete)
	{  
	case "Todo incluido":
	descuento=0.65;
	break;
	case "Solo desayunos":
	descuento=0.70;
	}
	break;
	
precioFinal = precioHabitacion*descuento;
{ 
alert("El precio final es " precioFinal);
}

