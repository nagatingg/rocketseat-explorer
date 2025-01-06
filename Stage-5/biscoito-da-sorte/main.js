import { Modal } from './modal.js';

function initializeApp(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
        Modal.changeScreen();
    }
}

Modal.svgAbrirBiscoito.addEventListener('click', initializeApp);
document.addEventListener('keydown', initializeApp);

document.addEventListener('DOMContentLoaded', initializeApp)