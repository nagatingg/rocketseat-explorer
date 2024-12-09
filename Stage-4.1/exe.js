
let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10.");

const randomNumber = Math.round(Math.random() * 10);

console.log(result, randomNumber);

let xAttempts = 1;

while (Number(result) != randomNumber) {
    result = prompt("Você errou, teste novamente: ");
    xAttempts++;
}

let tentativaS = false;

if(xAttempts == 1) {
    tentativaS = tentativa;
} else {
    tentativaS = tentativas;
}



alert(`Parabéns! Você acertou em ${xAttempts} ${tentativaS}.`);