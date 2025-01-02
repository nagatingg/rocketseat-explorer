import { Modal } from './modal.js';

export const calculateImc = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed();
}

export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function displayResultsMessage(result) {
    const message = `Seu IMC é ${result}`
    Modal.message.innerText = message;
    Modal.open()
}
