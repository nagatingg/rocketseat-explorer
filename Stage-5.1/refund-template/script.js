// Selecionando os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')


// Capturando o evento de input para formatar o valor
amount.oninput = () => {
    let value = amount.value.replace(/\D+/g, '')

    // Transformando o valor em centavos
    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value)

}
// Formando moeda no padrão BRL
function formatCurrencyBRL(value){
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

form.onsubmit = (event) => {
    event.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        create_at: new Date(),
    }
    console.log(newExpense)
}
