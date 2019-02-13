
function mostrar()
{
var primerNombre;
var segundoNombre;
var primerEdad;
var segundaEdad;
var edadesSumadas;

primerNombre=prompt("Ingrese el primer nombre");
segundoNombre=prompt("Ingrese el segundo nombre");

primerEdad=prompt("Ingrese la edad del primer nombre ingresado");
primerEdad=parseInt(primerEdad);
segundaEdad=prompt("Ingrese la edad del segundo nombre ingresado");
segundaEdad=parseInt(segundaEdad);
edadesSumadas=(primerEdad+segundaEdad);

alert("Ustedes son " +primerNombre+ " y " +segundoNombre+ ", sus edades son " +primerEdad+ " y " +segundaEdad+ ", y la suma de sus edades da " +edadesSumadas );


}
