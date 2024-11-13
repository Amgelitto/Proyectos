//parte 1
//Declaramos las variables
let nombre = "Angel";
let edad = 20;
let esEstudiante = false;
let estudia;

//condicion para mostrar una respuesta dependiendo del valor booleano
if (esEstudiante === true) {
    estudia = "si";
} else {
    estudia = "no";
}
//texto a consola
console.log("Su nombre es: ", nombre);
console.log("Su edad es: ", edad);
console.log("es estudiante: ", estudia);

//al cambiar el valor de las variables cambia lo que muestra la consola.
//-----------------------------------------------------------------------
//parte 2

let a = 3;
let b = 4;
let suma = a+b;
let resta = a-b;
let mult = a*b;
let div= a/b;

// comparamos los valores de las variables
let igualdad;
let diferencia;
let mayor;
let menor;
let mayoIgu;
let menIgu;

if (a == b) {
    igualdad = si;
}
else{
    igualdad = "no";
}

if(a != b){
    diferencia = "si";
}
else{
    diferencia = "no";
}

if (a < b){
    mayor = "si";
}
else{
    mayor = "no";
}

if (a > b){
    menor = "si";
}
else{
    menor = "no";
}

if (a <= b){
    mayoIgu = "si";
}
else{
    mayoIgu = "no";
}

if (a >= b){
    menIgu = "si";
}
else{
    menIgu = "no";
}

//mostramos resultados en pantalla 
console.log("a=", a);
console.log("b=", b);
console.log("suma=", suma);
console.log("resta=", resta);
console.log("multiplicación=", mult);
console.log("división=", div);

console.log("son iguales?", igualdad);  
console.log("son diferentes?", diferencia);
console.log("a es mayor que b?", mayor);
console.log("a es menor que b?", menor);
console.log("a es mayor o igual que b?", mayoIgu);
console.log("a es menor o igual que b?", menIgu);

/* ----------------------------------------------------
Parte 3
 */

let mayorEdad = true;
let licencia = false;
// comprobamos que ser mayor de edad y tener licencia para poder manejar
let puedeManejar = mayorEdad && licencia; 

if (puedeManejar) {
    console.log("puede manejar.");
} else {
    console.log("NO puede manejar.");
}

/* ----------------------------------------------------
Parte 4
 */
// con prompt recibimos datos 
 nombre = prompt("Ingresa tu nombre:");
 edad = prompt("Ingresa tu edad:");
 esEstudiante = prompt("¿Eres estudiante? (sí/no):");

 //uso el operador para no tener que usar el if - else
let mensajeEdad = (edad >= 18) ? "eres mayor de edad" : "eres menor de edad";
let mensajeDescuento = (esEstudiante.toLowerCase() === "sí") ? "tienes derecho a un descuento por ser estudiante" : "no tienes derecho a un descuento por ser estudiante";

console.log("Hola, " + nombre + ". " + mensajeEdad + " y " + mensajeDescuento + ".");









