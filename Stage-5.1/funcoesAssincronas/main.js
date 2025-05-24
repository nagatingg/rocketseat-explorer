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

async function fetch() {
    try { 
        const response = await asyncFunction()
        console.log("Sucesso", response)
    } catch(error) {
        console.log("Erro: ", error)
    } finally {
        console.log("Fim da execução!")
    }
}
fetch()

// Array function
/* 
    const fetch = async () => {
    const response = await asyncFunction()
    console.log(response)
}
fetch() 
*/

// Visualizando que o retorno é uma Promise

// console.log(asyncFunction())

/* 
    console.log("Executando a função asíncrona...")
 */
/* 
    const response = asyncFunction()
    console.log(response) */

/* 
    asyncFunction()
    .then((response) => {
        console.log("Sucesso?", response)
    })
    .catch((error) => {
        console.log("Falha?", error)
    })
    .finally(() => {
    console.log("Fim da execução")
    }) 
    */
