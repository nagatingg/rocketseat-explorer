/* Faca um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada
        1.Cadastrar um item na lista
        2.Mostrar itens cadastrados
        3.Sair do programa.
0 programa deverå capturar o nümero digitado pelo usuårio e most rar o seguintes
cenårios:
Caso o usuårio digite 1, ele poderå cadastrar um item em uma lista
Caso o usuårio digite 2, ele poderå ver os itens cadastrados
    Se näo houver nenhum item cadastrado, mostrar a mensagem:
    "Näo existem itens cadastrados"
Caso o usuårio digite 3, a aplicacäo deverå ser encerrada.
*/


/* let opcaoDigitada;
let items = [];


while (opcaoDigitada != 3) {

    opcaoDigitada = Number(prompt(`
        Olá usuário! Digite o número da opção desejada
            1. Cadastrar um item na lista
            2. Mostrar itens cadastrados
            3. Sair do programa.
            `));

console.log(opcaoDigitada);

if(opcaoDigitada == 1) {
    let item = prompt("Digite o nome do item: ");
    items.push(item);
} else if (opcaoDigitada == 2) {

    if(items.length == 0) {
        alert("Não existem itens cadastrados.")
    } else {
        alert(items);
    }

}

console.log(items, opcaoDigitada);

} */
let items = [];

let menu = Number(prompt(`Olá usuário! Digite o número da opção desejada
        1.Cadastrar um item na lista
        2.Mostrar itens cadastrados
        3.Sair do programa.`));

if(menu == 1) {
    items[0] = prompt("Digite o nome do item:");
} else if(menu == 2) {
    alert(items);
    if(items.length == 0) {
        alert("Não existe items cadastrados");
} else {
    }
}

console.log(menu);