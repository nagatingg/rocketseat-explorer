// Obtendo os elementos
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.querySelector('h1')

const valueUSD = 5.85
const valueEUR = 6.15
const valueGBP = 7.25

// Capturando o evento de submit no formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, valueUSD, '$')
            break
        case 'EUR':
            convertCurrency(amount.value, valueEUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, valueGBP, '£')
            break
    }
}

function convertCurrency (amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total).replace('R$', "")} Reais`

        // Verifica se o resultado não é um número
        if(isNaN(total)) {
            console.log("Por favor, digite corretamente")
        }

        // Mostrando o resultado aplicando a classe
        footer.classList.add('show-result')
    } catch (error) {
        console.log(error)
        footer.classList.remove('show-result')
        alert(`Não foi possível converter`)
    }
}

function formatCurrencyBRL(value){
    // Converte primeiro para número, para utilizar o tolocalestring para moeda padrão
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

// Manipulando o input amount para receber somente números
amount.addEventListener('input', () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})