
let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10.");

const randomNumber = Math.round(Math.random() * 10);

console.log(result, randomNumber);

let xAttempts = 1;

while (Number(result) != randomNumber) {
    result = prompt("Você errou, teste novamente: ");
    xAttempts++;
}

// Definindo a palavra correta com base no número de tentativas
// const tentativaS = xAttempts === 1 ? "tentativa" : "tentativas";

let tentativaS;

if(xAttempts == 1) {
    tentativaS = "tentativa";
} else {
    tentativaS = "tentativas";
}



alert(`Parabéns! Você acertou em ${xAttempts} ${tentativaS}.`);