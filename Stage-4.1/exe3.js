let numberOne = prompt("Digite o número um: ");
let numberTwo = prompt("Digite o número dois: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

/* Soma */
const sum = numberOne + numberTwo;

/* Subtraction */
const subtraction = numberOne - numberTwo;

/* Multiplication */
const multiplication = numberOne * numberTwo;

/* Division */
const division = numberOne / numberTwo;

/* Rest of the division */
const restOfTheDivision = numberOne % numberTwo;

alert("Resultado: " + sum);
alert("Resultado: " + subtraction);
alert("Resultado: " + multiplication);
alert("Resultado: " + division);
alert("Resultado: " + restOfTheDivision);

const sum = sum + 100;
alert(sum);

/* Refazendo de forma rápida */

let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum1 = firstNumber + secondNumber;

alert("A soma dos dois números é: " + sum1);