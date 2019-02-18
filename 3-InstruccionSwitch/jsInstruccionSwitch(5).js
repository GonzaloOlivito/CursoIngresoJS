function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var hora=" ";
laHora=parseInt(laHora);
//alert (laHora);
	
switch (laHora)
	{	
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:

	hora="Es de mañana";

	break;
	}
	if(hora != "")
	{
		alert(hora);
	}
}//FIN DE LA FUNCIÓN