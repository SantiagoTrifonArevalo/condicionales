// Ejercicio.1
let number=prompt("inserte un dato")    
if (number>=5){
    console.log("El número es mayor o igual que 5");
}
else
{
    console.log("El número es menor que 5");
}

// Ejercicio.2
let number1=prompt("inserte un dato")
if (number1>5) {
console.log("El número es mayor que 5");    
}
else if (number1<5) {
    console.log("El número es menor que 5");
}
else
console.log("El número es igual a 5");

// Ejercicio.3

function esPar(valor=8)
 {
     if (valor%2===0) {
       console.log("El número es par");   
    } else {
    console.log("El número es impar");
}

}
esPar()



// Ejercicio.4
let number5=8
let number6=13
if (number5>number6) {
    console.log(number5);
if (number6>number5) {
console.log(number6);
}
    else {
   console.log(number5=number6);     
}
}
// Crea dos variables: number1 y number2. Dale los valores que quieras (números). A continuación, crea los condicionales necesarios para que se muestre por consola qué número es el mayor o bien si son iguales.

// Ejercicio 5

// Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea los condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno.

// Ejercicio.6

// Crea 3 variables: min, max y number3, y dale valores numéricos a cada uno. A continuación, escribe los condicionales necesarios para que se muestre por consola si el número se encuentra en el rango dado (si es mayor que min y menor que max).

// Ejercicio.7

// Crea la variable operation y reutiliza number1 y number2 del Ejercicio 4. Escribe condicionales para realizar las cuatro operaciones matemáticas básicas:

// Printa el resultado de number1 + number2 si la operation es “add”.
// Printa el resultado de number1 - number2 si la operation es “subtract”.
// Printa el resultado de number1 * number2 si la operation es “multiply”.
// Printa el resultado de number1 / number2 si la operation es “divide”.
// Si no se cumple ninguna de las anteriores, print Invalid operation

// Ejercicio.8


// Crea la variable year y pídele al usuario que introduzca un año. A continuación, escribe condicionales para determinar si el año es bisiesto o no. El resultado debe ser un string que se le muestre al usuario en un pop-up.

// Bonus: repite el ejercicio usando el operador ternario.

// Ejercicio.9

// Usa switch para determinar el número de días que tiene un mes dado en la variable month. El valor de la variable se le pedirá al usuario (en forma de string, en inglés y en minúsculas: "january", "february", "march", etc.).

// Resultado esperado: "El mes tiene <<numero de días>> días", y debe mostrarse en un pop-up.

// Ejercicio 10

// Usa la misma variable del ejercicio anterior (month), y escribe los condicionales necesarios para determinar la estación (primaver, verano, otoño, invierno). El resultado también debe mostrarse al usuario en un pop-up.