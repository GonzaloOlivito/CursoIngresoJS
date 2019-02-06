/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var primerNumero;
var segundoNumero;


primerNumero=numeroUno.value;
segundoNumero=numeroDos.value;

//parseInt(primerNumero);
//parseInt(segundoNumero);


primerNumero=parseInt(primerNumero);
segundoNumero=parseInt(segundoNumero);

suma=primerNumero+segundoNumero;


//suma = (primerNumero+segundoNumero);
alert("La suma es " +suma);


//alert ("la suma es" +suma );
}

