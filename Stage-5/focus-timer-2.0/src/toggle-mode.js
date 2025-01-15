let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')
const changeMode = document.querySelector('html')

buttonToggle.addEventListener('click', (event) => {
    changeMode.classList.toggle('light') // Mode 1
    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = '${mode} mode ativado'
    darkMode = !darkMode

})