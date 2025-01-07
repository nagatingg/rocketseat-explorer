import { displayPhrase } from './loadPhrases.js';

export const Modal = {
    screens: {
        screen1: document.querySelector('.screen1'),
        screen2: document.querySelector('.screen2'),
    },

    messages: {
        message: document.querySelector('.screen2 p span')
    },
    svgAbrirBiscoito: document.querySelector('.screen1 svg'),
    svgAbrirNovoBiscoito: document.querySelector('.btn.btnAgain'),

    changeScreen() {
        if(Modal.screens.screen1.classList.contains('is-hiden')) {
            Modal.screens.screen1.classList.remove('is-hiden')
            Modal.screens.screen2.classList.add('is-hiden') 
        } else {
            Modal.screens.screen1.classList.add('is-hiden')
            Modal.screens.screen2.classList.remove('is-hiden') 
        }
    },

}

export function initializeApp(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
        Modal.changeScreen();
        displayPhrase();
    }
}

export function initializeAppAgain(event) {
    if (event.type === 'click') {
        Modal.changeScreen();
    }
}