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

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:

	hora="Es de noche"

	break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:

	hora="Es de tarde"	

	break;

	default:

	hora="Esa hora no existe"

	break;

	

	}
	if(hora != "")
	{
		alert(hora);
	}


}//FIN DE LA FUNCIÓN