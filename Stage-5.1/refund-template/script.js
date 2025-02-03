// Selecionando os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul')
const expenseTitle = document.getElementsByClassName('expense-info')

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

    // Chama função que irá adicionar item na lista
    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
    try {
        // Criando elementos para adicionar na lista
        const expenseItem = document.createElement('li')
        expenseItem.classList.add('expense')

        // Cria o icone da categoria
        const expenseIcon = document.createElement('img')
        expenseIcon.setAttribute(
            'src',
            `./img/${newExpense.category_id}.svg`
        )
        expenseIcon.setAttribute('alt', newExpense.category_name)

        // Adiciona a info da despesa
        const expenseInfo = document.createElement('div')
        expenseInfo.classList.add('expense-info')

        // Criando nome da despesa
        const expenseName = document.createElement('strong')
        expenseName.textContent = newExpense.expense

        // Cria a categoria
        const expenseCategory = document.createElement('span')
        expenseCategory.textContent = newExpense.category_name

        // Adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo)


        // Adiciona o item na lista
        expenseList.append(expenseItem)

        // Adicionando name e category na div das informações da despesa
        expenseInfo.append(expenseCategory, expenseName)

    } catch (error) {
        alert(`Não foi possível atualizar a lista de despesas.`)
        console.log(error)
    }
}
