// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array

const products = ['Teclado', 'Mouse', 'Monitor']
// Percorro os itens do Array
products.map((item) => {
    // Para fazer alguma manipulação do item que você está percorrendo
    console.log(item)
})

// Sintaxe reduzida, simplesmente retorno
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
    // return product.toUpperCase()
    return {
        id: Math.random(),
        description: product,
    }
})
console.log(formatted);

const words = ['JavaScript', 'CSS', 'Web']

const result =words.filter((word) => word.length > 3)
console.log(result)

const produtos = [
    {name: 'HTML', price: 200, promotion: true},
    {name: 'WEB', price: 150, promotion: false},
]

// xemplo de um filtro de produtos na promoção
const promotion = produtos.filter((produto) => produto.promotion === true)
console.log(promotion)

// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição.  Caso contrário, retorna -1, indicando que nenhum elemento passou no teste

const valores = [4, 6, 8, 12]

// Obtendo o primeiro índice do elemento que o valor é maior do que 4
const index = valores.findIndex((valor) => valor > 4)
// Exibindo o conteúdo da posição
console.log(valores[index])
// Exemplo quando não encontra
console.log(valores.findIndex((numero) => numero > 12))

/// O método find() retorna o índice no array do primeiro elemento que satisfizer a condição.  Caso contrário, retorna undefined

const valors = [5, 12, 8, 130, 44]
// Retorna o primeiro elemento com valor maior que 10
const found = valors.find((valorr) => valorr > 10)
console.log(found);

// Exemplo com objeto
const fruits = [
    {name: 'Apple', quantity: 23},
    {name: 'Bananas', quantity: 25},
    {name: 'Oranges', quantity: 52},
]

const foundd = fruits.find((fruit) => fruit.quantity > 10)
console.log(foundd)

// O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean

const ages = [18, 20, 40, 8, 10, 12]
// Verifica se todos os items passam na condição de maiores de 18 anos
const resultado = ages.every((age) => age >= 18)
console.log(resultado)