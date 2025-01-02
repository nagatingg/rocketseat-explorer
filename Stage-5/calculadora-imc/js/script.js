import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { calculateImc, notANumber, displayResultsMessage } from './utils.js'

// variáveis - variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

//modalMessage.innerText = message;
// 3 maneira de criar e atribuir função a um evento
// 1
//form.onsubmit = () => {}
// 2
//form.onsubmit = handleSubmit
//function handleSubmit () {}
// 3
form.onsubmit = event => {
    event.preventDefault()
    
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();
    const result = calculateImc(weight, height)
    displayResultsMessage(result)

}