// Selecionando os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul')
const expenseQuantity = document.querySelector('aside header p span')
const expenseTotals = document.querySelector('aside header h2')



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

    // Chama função que irá adicionar item na lista
    expenseAdd(newExpense)
}

// Adiciona um novo item na lista
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

        // Cria os valores da despesa
        const expenseAmount = document.createElement('span')
        expenseAmount.classList.add('expense-amount')

        const expenseSymbol = document.createElement('small')
        expenseSymbol.textContent = 'R$'

        const expenseValue = document.createElement('span')
        expenseValue.classList.add('expense-value')
        expenseValue.textContent = newExpense.amount.replace('R$', '')

        // Cria o ícone de remover
        const removeIcon = document.createElement('img')
        removeIcon.classList.add('remove-icon')
        removeIcon.setAttribute('src', "./img/remove.svg")
        removeIcon.setAttribute('alt', "remover")

        // Adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, expenseSymbol, expenseValue, removeIcon)


        // Adiciona o item na lista
        expenseList.append(expenseItem)

        // Adicionando name e category na div das informações da despesa
        expenseInfo.append(expenseName, expenseCategory)

        // Atualiza os totais
        updateTotals()

        // Limpa o formulário para criar um novo item
        formClear()

    } catch (error) {
        alert(`Não foi possível atualizar a lista de despesas.`)
        console.log(error)
    }
}

// Atualia os totais
function updateTotals(){
    try {
        // Recupera todos os itens da lista
        const items = expenseList.children

        // Atualiza a quantide de items na lista
        expenseQuantity.textContent =`${items.length} ${items.length > 1 ? 'despesas' : 'despesa'
        }`

        // Variavel para incrementar o total
        let total = 0

        // Percorre cada item (li) da lista (ul)
        for(item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector('.expense-value')
            // Remove caracteres não números e substitui a virgula pelo ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, '').replace(',', '.')

            // Converte o valor para float
            value = parseFloat(value)

            // Verificar se é um número válido
            if(isNaN(value)){
                console.log('Não é um número')
            }

            // Incrementar o valor total
            total += Number(value)
            console.log(total)
        }
        /* expenseTotals.textContent = formatCurrencyBRL(total) Método que não pode por causa da formatação do HTML*/

        // Criando o método correto
        const symbolBRL = document.createElement('small')
        symbolBRL.textContent = "R$"

        // Formata o valor e remove o R$ que será exibido pela small
        total = formatCurrencyBRL(total).toLocaleUpperCase().replace('R$', '')

        // Limpa o conteúdo do elemento
        expenseTotals.innerHTML = ''
        // Adiciona o simbolo da moeda e o total
        expenseTotals.append(symbolBRL, total)
    } catch (error) {
        console.log(error)
        alert("Não foi possui atualizar os totais.")
    }
}

// Evento que captura o clique nos itens da lista
expenseList.addEventListener('click', function(event){
    // Verifica se elemento clicado é o de remover
    if(event.target.classList.contains('remove-icon')){
        // Obtem a (li) pai do elemento clicado
        const item = event.target.closest('.expense')
        // Remove o item da lista
        item.remove()

        // Atualiza os valores totais
        updateTotals()
        console.log(event)
    }
})

function formClear() {
    expense.value = ''
    category.value = ''
    amount.value = ''

    expense.focus()
}