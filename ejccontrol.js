/*Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function mayoriaEdad (x){
    if (x>=18) {
        console.log("Usted es mayor de edad. puede votar. ")
    } else{ 
        console.log ("Usted es menor de edad, no puede votar. ")
    }
}

const mayoriaEdadFlecha = (x) => (x>=18) ? console.log(`Usted tiene ${x} años de edad, puede votar.`) : console.log(`Usted tiene ${x} años de edad, usted no puede votar.`);


/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedio (a, b, c , d){
    console.log(`Las calificaciones del alumno son, ${a} , ${b}, ${c}, ${d}. `) //Se vuelve redundante pero se ve bonito.
    let promedio = (a+b+c+d)/4
    console.log(`El promedio del alumno es: ${promedio}`)
    if (promedio>=7 && promedio<=10) {
        console.log("Estatus del alumno: Aprobado")
    } else if (promedio>10) {
        console.log("Error verifique sus calificaciones")
    } else{
        console.log("Alumno reprobado")
    }
} 




/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

    

function numeroDivisible (num){
    if( num%7==0 && num%8==0){
    console.log("Verdadero")
} else {
    console.log("Falso")
}
}

const numDivisibleFlecha = (num) => (num%7==0)&&(num%8==0) ? console.log("Verdadero") : console.log("Falso")


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */


function dobleDivisible (z){
    if( z%4==0 || num%9==0){
    console.log("Verdadero")
} else {
    console.log("Falso")
}
}

const dobleDivisibleFlecha = (z) => (num%4==0)||(num%9==0) ? console.log("Verdadero") : console.log("Falso")


/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

    function abacoModerno (a, operacion, b){
        let resultado;
        switch(operacion){
            case "+":
            resultado = a + b; 
            console.log(`El resultado de tu suma es: ${resultado}`)
            break;
            case "-":
            resultado = a - b; 
            console.log(`El resultado de tu resta es: ${resultado}`)
            break;
            case "*":
            resultado = a * b; 
            console.log(`El resultado de tu multiplicacion es: ${resultado}`)
            break;
            case "/":
            resultado = a / b; 
            console.log(`El resultado de tu division es: ${resultado}`)
            break;
            default:
            console.log("Error")
        }
    }


/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliDelDia (pelicula){
    switch(pelicula.toLowerCase()){
        case "accion": console.log("Te recomiendo duro de matar 1")
        break;
        case "drama": console.log("Deberias de ver Roma")
        break;
        case "comedia": console.log("Conoces la historia de pagliacci el payaso?")
        break;
        case "romance": console.log("Definitivamente antes de ti es una buena sugerencia")
        break;
        case "suspenso": console.log("Oppenheimer cuenta como suspenso? Claro que si!")
        break;
        case "terror": console.log("El genero de terror esta muerto pero bueno... Cualquiera de saw")
        break;
        default:
        console.log("Eso no esta en mi catalogo, intenta de nuevo")
    }
}


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */






/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */






/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */