/*
Imutabilidade
Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

A imutabilidade é utilizado para otimizar a atualização do DOM ( Document Object Model) e para fornecer um modelo mais previsível no desenvolvimento de interfaces (UI)
*/

const address1 = {
    street: 'Avenida Brasil',
    number: 20
}

// Estou sobrescrevendo
const address2 = address1

// Criando novo objeto
const address3 = { ...address1 }
address3.number = 203
console.log(address3)

// Outra opção
const address4 = {...address1, number:50}
console.log(address4)

// Exemplo arrays (errado)
const list1 = ['Apple', 'Banana']
const list2 = list1
list2.push('Melão')
console.log(list1, list2)

// Exemplo correto
const list3 = [...list1]
list3.push('Limão')
console.log(list3)