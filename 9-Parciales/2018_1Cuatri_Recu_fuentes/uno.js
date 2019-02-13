
function mostrar()
{
var perimetro;
var ancho;
var largo;

largo=prompt("Ingrese el largo");
ancho=prompt("Ingrese el ancho");

largo=parseInt(largo);
ancho=parseInt(ancho);

perimetro=(largo + ancho) * 2;
alert("El perimetro del rectangulo es " +perimetro);
}
