import { Modal, initializeApp, initializeAppAgain } from './modal.js';

Modal.svgAbrirBiscoito.addEventListener('click', initializeApp);
Modal.svgAbrirNovoBiscoito.addEventListener('click', initializeAppAgain);
document.addEventListener('keydown', initializeApp);

document.addEventListener('DOMContentLoaded', initializeApp)