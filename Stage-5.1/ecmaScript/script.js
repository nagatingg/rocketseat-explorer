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

