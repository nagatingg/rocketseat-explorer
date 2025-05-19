// setTimeout() executa uma função após um intervalo de tempo especificado.

setTimeout (() => {
    console.log("Hello World!")
}, 2000) // tempo em milissegundos

// setInterval() executa uma função após um intervalo de tempo especificado.

let value = 3

const interval = setInterval(() => {
    console.log(value)
    value--

    if(value == 0) {
        console.log("Feliz ano novo!")
        clearInterval(interval)
    }
}, 3000);