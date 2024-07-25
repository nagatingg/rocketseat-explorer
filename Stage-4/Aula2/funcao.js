

const sum = function (a1, a2) {
    total = a1 + a2;
    return total;
}

let number1 = 33;
let number2 = 25;

sum(2,2);

console.log("O número 1 é: " + number1);
console.log("O número 2 é: " + number2);
console.log("A soma é: " + sum(number1, number2));


function fazerSuco (fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = fazerSuco("maracuja", "limao");
console.log(copo);


let subject = 'olá!'
function createThink(subject) {
    subject = "study"
    return subject;
}

console.log(subject)
console.log(createThink(subject));


const sayMyName = (name) => {
    console.log(name)
}

sayMyName("Wesley");


function meuNome(nome) {
    console.log("Antes de executar a callback");
    nome();
    console.log("Depois de executar a callback")
}

meuNome(
    () => {
        console.log("Estou em uma callback");
    }
);

function Person (name) {
    this.name = name;
}
const Wesley = new Person("Wesley")

console.log(Wesley)