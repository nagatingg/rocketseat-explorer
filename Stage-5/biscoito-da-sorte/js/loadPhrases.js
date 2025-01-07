import { Modal } from './modal.js';

export async function loadPhrases() {
    const responde = await fetch('./phrases.txt');
    const text = await responde.text();
    return text.split('\n').map(phrase => phrase.trim());
}

export async function displayPhrase() {
    const phrases = await loadPhrases();
    const randomIndex = Math.floor(Math.random() * phrases.length);
    Modal.messages.message.innerText = (phrases[randomIndex]);
}

