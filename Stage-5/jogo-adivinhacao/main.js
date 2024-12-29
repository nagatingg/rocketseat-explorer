// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
// eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', function(enter) {
    if(enter.key == 'Enter') {
        handleAgainClick()
    }
})
// função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão
    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2
            .querySelector("h2").innerText = `acertou em ${xAttempts} tentativas.`}
    
    inputNumber.value = ""
    xAttempts++
}

function handleAgainClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function errorColor() {
    // mudando cor ao errar número
    document.body.style.background = 'red';
    // voltando a cor original
    setTimeout(() => {
        document.body.style.background = ''; // remove o estilo inline
    }, 1000)
}