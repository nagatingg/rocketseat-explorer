import state from "./state.js"
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    // se o operador minutes for  NULL, pega o valor de state.minutes e adiciona em minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}