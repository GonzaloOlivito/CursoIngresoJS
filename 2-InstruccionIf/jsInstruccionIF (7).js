function mostrar()
{
//tomo la edad  

var laEdad;
var elEstadocivil

laEdad=edad.value;
laEdad=parseInt(laEdad);

elEstadocivil=estadoCivil.value;

if(laEdad<18 && elEstadocivil!="Soltero")
{
	alert ("Es muy pequeño para no ser soltero");
}




}//FIN DE LA FUNCIÓN