function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var calificacion;
	nota=Math.floor(Math.random() * 11);  

	if(nota>4)
	{
		califacion="Aprobó";
	if (nota <5)
	califacion="Mas suerte la proxima";

	}else
	{
		califacion="Excelente";
	}

	alert(califacion);
}//FIN DE LA FUNCIÓN