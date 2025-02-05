// Strict mode para erros que antes eram silenciosos
'use strict'
function showMessage(){
    let personName = 'Wesley Alexandre'
    console.log(personName)
}
showMessage()

class Student{
    get point(){
        return 7
    }
}
let student = new Student()
// student.point = 10

// tentando deletar uma propriedade de um objeto que não posso deletar
// delete windows.document

// Quando passamos parametros duplicados
// function sum(a, a, c){
    // return a + a + c // O último valor de A sobrepõem o primeiro
// }

const data = ['Wesley Alexandre', 'hahaha@gmail.com']
// Desestruturando array, pegando o primeiro valor e colocando em username
const [username, email] = data

const fruits = ['Banana', 'Apple', 'Orange']
// Desestruturar apenas o primeiro
const [banana] = fruits

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple)

// Desesutruturação em objetos
const product = {
    description: 'Mouse',
    price: 150
}

const {description, price} = product
console.log('Descrição:', description)

// Desestruturação em funções
function newProduct({name, description, price}){
    console.log('Description:', description)
}
// newProduct(_, 'Teclado')
newProduct({
    description: 'Teclado'
})

// Rest params (...) permite representar um número indefnido de argumentos como um array
function values (a, ...rest){ // comum rest ser chamado de args
    // Mostra a quantidade de parametros
    console.log(rest.length)
    console.log(a)
    console.log(...rest)
}
values(2, 1, 5, 4, 6, 6)

// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos

const numbers = [1, 21, 3]
console.log(numbers)
// Spread
console.log(...numbers)

// Criando objeto
const data1 = [
    {
        name: 'Wesley',
        sobrenome: 'Alexandre'
    },
    {
        name: 'Rodrigues',
        sobrenome: 'Martins'
    },
]
console.log(data1)
// Utilizando spread em objetos
console.log(...data1)

