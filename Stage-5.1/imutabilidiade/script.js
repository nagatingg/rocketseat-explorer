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
console.log(book)

function deepFreeze(object){
    // Obtém um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    console.log(props)
}

deepFreeze(book)