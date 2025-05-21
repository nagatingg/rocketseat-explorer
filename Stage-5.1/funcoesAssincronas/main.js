// Função que retorna uma Promise
function asyncFunction(){
    return new Promise((resolve, reject) => {
        // Simulando uma operação assíncrona
            setTimeout(() => {
            const isSuccess = true
            if(isSuccess){
                resolve("A operação foi concluída com sucesso.")
            } else {
                reject("Operação inválida.")
            }
        }, 3000)
    })
}

// Visualizando que o retorno é uma Promise

// console.log(asyncFunction())

console.log("Executando a função asíncrona...")

const response = asyncFunction()
console.log(response)

/* asyncFunction()
    .then((response) => {
        console.log("Sucesso?", response)
    })
    .catch((error) => {
        console.log("Falha?", error)
    })
    .finally(() => {
    console.log("Fim da execução")
    }) */
