console.log ("alo politzi?")

/**SUM OF RESISTORS SERIES
 
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/
//Ejercico 1

function sumResistance(resistance){
    let totalResistance = 0;
for(let i = 0; i < resistance.length; i++){
    totalResistance += Math.abs(resistance[i])
}
return totalResistance + " ohms"
}
const resistance = [-1,5,6,3]
const sum =  sumResistance(resistance)
console.log(sum)

//Ejercicio 2

function sumResistance(resistance){
    let totalResistance = 0;
for(let i = 0; i < resistance.length; i++){
    totalResistance += Math.abs(resistance[i])
}
return totalResistance + " ohms"
}
const resistanceSecond = [14,3.5,6]
const sumSecond =  sumResistance(resistanceSecond)
console.log(sumSecond)

//Ejercicio 3

function sumResistance(resistance){
    let totalResistance = 0;
for(let i = 0; i < resistance.length; i++){
    totalResistance += Math.abs(resistance[i])
}
return totalResistance + " ohms"
}
const resistanceThird = [8,15,100]
const sumThird =  sumResistance(resistanceThird)
console.log(sumThird)

/** NUMBER DIVIDES INTO HALVES

Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
Note: The original example for `numDiv(10)` appears to be incorrect.
 * */

//Ejercicio 1

const numDiv = number =>{
const array = [];
    const half = number / 2;
    array.push(half); // array[0] = half
    array.push(half); // array[1] = half
    return array;}

const resultaDos = numDiv (2, 2)
console.log (resultaDos)

/**SECRET SOCIETY
Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
*/


function nombreSecreto(miembros) {

    const initials = miembros.map(miembros => miembros[0]);
    const secreto = initials.join('');
    return secreto;

  }

const resultUno = nombreSecreto(["Esperanza", "Franco", "Nia"]);
console.log(resultUno); 

const resultDos = nombreSecreto(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]);
console.log(resultDos); 

const resultTres = nombreSecreto(["Harry", "Ron", "Hermione"]);
console.log(resultTres); 


/**ONLINE STATUS 
 
/*Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

/**
 * 1, Obtener la cantidad total de ususarios osea "n"
 * 2. Calcular los susuarios restantes eliminando del total los primeros dos
 * 3. Obtener los primeros dos 
 * 4. Imprimir mensaje
 */
const userData = ("mockIng99", "J0eyPunch", "glassedFer", "anon123")

function getLength (arr){
    return arr.length;
}

function calcularRemaining (total){
    return total - 2;
}
function getUser (arr){
    const userData = arr[0] + arr[1]
    return userData
}
function onlineStatus1 (arr){
    const total = getLength(arr)
    const rest = calcularRemaining (total);
    const firstUsers= getUser(arr);
    console.log(`Users: ${firstUsers}, and ${rest} are online`);
}

onlineStatus1(userData)

/**ARRAY OF MULTIPLES
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
*/

  function arrayMultiplos(number, length) {
    if (length <= 0 || !Number.isInteger(length)) {
      return 'Invalid length';
    }
    const multiplesArray = Array.from({ length: length }, (_, index) => (index + 1) * number);
  
    return multiplesArray;
  }
  const resulta = arrayMultiplos(2, 10);
  console.log(resulta); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  