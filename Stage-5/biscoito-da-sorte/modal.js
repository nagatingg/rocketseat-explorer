export const Modal = {
    screens: {
        screen1: document.querySelector('.screen1'),
        screen2: document.querySelector('.screen2'),
    },
        svgAbrirBiscoito: document.querySelector('.screen1 svg'),

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

function openCookie(event) {
    Modal.changeScreen()
    console.log("cheguei aqui")
}