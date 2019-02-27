function mostrar()
{
var notas;
var sexo;
var acumulador=0;
var promedioNotas;
var notaMenor=10;
var notaVarones=0;
var sexoMenor;
for(contador=0;contador<5;contador++)
	{
		notas=prompt("ingrese las notas");
		notas=parseInt(notas);
		acumulador=acumulador+notas;

		while(notas<0 || notas>10)
		{
			notas=prompt("nota no valida, reintente");
			
		}		
		
			
			sexo=prompt("ingrese el sexo del alumno");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Sexo invalido, reintente")
		}
		if(notas<notaMenor)
			{
				notaMenor=notas;
				sexoMenor=sexo;
			}
		if(notas>6 && sexo=="m")
			{
				notas=notaVarones++;
			}

	promedioNotas=acumulador/5;	
	}
alert("el promedio de las notas totales es de " +promedioNotas+ "la nota menor es " +notaMenor+ "con sexo " +sexoMenor+ "y la cantidad de varones que aprobaron con mas de seis es " +notaVarones);

}
