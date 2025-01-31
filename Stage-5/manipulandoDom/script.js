// Visualizar o conteúdo do document.
//console.log(document)

// Obter o title da página
/* console.log(document.title) */

/* const guest = document.getElementById('guest-2')
const spanGuest2 = guest.querySelectorAll('span')[0]
spanGuest2.textContent = 'Joao'
 */

/* const guestsByClass = document.getElementsByClassName('guest')
console.log(guestsByClass[1])
 */
/* console.dir(guest) */

/* const guest = document.querySelector('#guest-2')
console.log(guest.textContent = "Alo")
console.log(guest.innerHTML)

const input = document.querySelector('form input')
input.classList.add('input-error')
input.style.backgroundColor = "blue" */

const guets = document.querySelector('ul')
const newGuest = document.createElement('li')
newGuest.classList.add('guets')
const guestName = document.createElement('span')
guestName.textContent = "Pedro"

// adicionando a um elemento dentro do outro
//newGuest.append(guestName) // append adiciona após o ultimo filho


// adicionando ao html

// também existe esse, aceita apenas 1 argumento
newGuest.appendChild(guestName)
guets.append(newGuest)

// ir ao topo
//guets.prepend(newGuest)

// adicionando atributos
/* const input = document.querySelector('input')
input.setAttribute('actived', true)
input.setAttribute('type', 'file')
input.removeAttribute('id') */

window.addEventListener('load', () => {
    console.log('A página foi carregada')
})

/* addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target)
}) */

/* const ul = document.querySelector('ul') */
guets.addEventListener('click', (event) => {
    if(event.target.textContent == 'Pedro') {
        console.log('acertou')
        return
    }
    console.log('Errou')
/*     console.log(event.target.textContent) */
})

const form = document.querySelector('form')
// executa apenas o ultimo
form.onsubmit = (event) => {
    event.preventDefault()
    console.log('Você fez submit')
}
// executa todos
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Foi')
})

const input = document.querySelector('input')
// keydown - ao pressionar uma tecla (tudo)

input.addEventListener('keydown', (event) => {
/*     console.log(event.code) */
})
// keypress apenas caracteres, excluindo tab, control, etc
input.addEventListener('keypress', (event) => {
/*     console.log(event.key) */
})

input.onchange = () => {
    console.log('input mudou')
}


input.addEventListener('input', (event) => {
    const value = input.value
    const regex = /\D+/g
    console.log(value.match(regex))

    // teste o padrão
    // const isValid = regex.test(value)
    // console.log(isValid)
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const value = input.value.replace(regex, 'x')
    console.log(value)
})