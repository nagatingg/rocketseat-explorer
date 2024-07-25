/* let string = "123";

console.log(Number(string));

let number = 321;

console.log(String(number)); */

/* Transformando em string numero e vice VideoColorSpace

let word = "Sonho";
console.log(word.length);

let number = 3434;
console.log(String(number).length); */

// ---
/* let number = 23112112.1212111212;
console.log(number.toFixed(4).replace(".", ",")); */
// Acabou virando STRING

//-- Transformar letras minusculas em maiusculas
/* let word = "Wesley Alexandre";
console.log(word.toLowerCase().replace("w", "Z")); */

// -- Separe um texto que contem espaços, arros, posição, etc

/* let texto = "Wesley Alexandre Rodrigues Martins";
let myArray = texto.split(" ");
console.log(myArray);

let transform = myArray.join("_");
console.log(transform); */


//-- Verficiar se um texto possui uma palavra especifica

/* let texto = "Wesley Alexandre Rodrigues Martins";
console.log(texto.includes("Rodrigues")); */

// -- Criar Array com construtor

/* let myArray = new Array(4);
console.log(myArray); */

/* // -- Contar elementos do Array
console.log(["a", "b", "c"].length); */

/* console.log(Number("9") + 5);

let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number)); */

/* let word = "Alomundoaaa"
console.log(word.length);
let number = 123456;
console.log(String(number).length); */

/* let number = 1213131313.1212121212;

console.log(Number(number.toFixed(3).replace(".", ",")))
 */

/* let word = "Hello Word!";

console.log(word.toLowerCase().toUpperCase());

 */

/* let word = "Olá mundo aqui estou!";

let array = word.split(" ");
console.log(array);
let transformArray = array.join("_")
console.log(transformArray.toUpperCase()); */

/* let word = "Alo mundo como está?";
console.log(word.includes("como")); */

/* let array = new Array (function () { return "Olá!" });
console.log(array);

console.log(array[0]()); */

let array = ["html", "css", "javascript"]

array.push("node.js");
array.unshift("mysql");
array.pop();
array.shift();
/* 
array.splice(0, 2); */

let index = array.indexOf("javascript");
console.log(index);
array.splice(index, 2)


console.log(array);

/* console.log(array.slice(1, 3)); // pegar comente alguns elementos do array */