const book = {
    title: "Objetos Imutáveis",
    category: "JavaScript",
    author: {
        name: "Wesley",
        email: "wesley@email.com"
    },
}

const updateBook = {
    ...book,
    title: "Criando um Front-end moderno",
    category: "HTML"
}

updateBook.category2 = "CSS"

console.log(book)
console.log(updateBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const {category, ...updateBook2} = book
console.log(updateBook2)