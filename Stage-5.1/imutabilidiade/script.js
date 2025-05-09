const book = {
    title: "Objetos Imutáveis",
    category: "JavaScript",
    author: {
        name: "Wesley",
        email: "wesley@email.com"
    },
}


// Congelar um objeto e impedir sua modificação
// Congelando RASO
Object.freeze(book)
/* book.author.push({name: "Joao"}) */

// Objeto aninhados ainda é alterado
// book.author.name = "Joao"

function deepFreeze(object){
    // Obtém um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)

    // Itera sobre todas as propriedades do objeto
    for (const prop of props) {
        // Obtem o valor associado à propriedade atual.
        const value = object[prop]

        // Verifica se tem valor E se o valor é um objeto ou função
        if (value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }
    return Object.freeze(object)
}

// Chama a função para congelar o objeto com Deep Freeze (congelamento profundo)
deepFreeze(book)

// Tentativa de modificar
book.author.name = "Pedro"
console.log(book)