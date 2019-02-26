function mostrar()
{
var nota;
var sexo;
var contador;
var acumulador=0;
var menor=10;
var sexoMenor;
	for(contador=0;contador<5;contador++)
		{
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);
						
		while(nota<0 || nota>10)
		{
			nota=prompt("nota incorrecta, reintente");	
			sexo=prompt("ingrese el sexo del alumno")
		}
		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("sexo invalido");
		}
		acumulador=acumulador+nota;
			if(nota < menor)
			{
				menor=nota;
				sexoMenor=sexo;
			}
		if(nota>5 && sexo == "m")
			{
				varonesAprobado= varonesAprobado+1;
			}

		acumulador=acumulador/5;

		alert("El promedio de las notas es " +acumulador+ ", la nota mas baja es " +menor+ "es de sexo " +sexoMenor+ ", y la cantidad de varones aprobados es " +varonesAprobado);
	}
}