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

const guest = document.querySelector('#guest-2')
/* console.log(guest.textContent = "Alo") */
console.log(guest.innerHTML)

const input = document.querySelector('form input')
input.classList.add('input-error')
input.style.backgroundColor = "blue"