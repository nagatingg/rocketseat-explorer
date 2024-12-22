/* Faca um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada
        1.Cadastrar um item na lista
        2.Mostrar itens cadastrados
        3.Sair do programa.
0 programa deverå capturar o nümero digitado pelo usuårio e mostrar o seguintes
cenårios:
Caso o usuårio digite 1, ele poderå cadastrar um item em uma lista
Caso o usuårio digite 2, ele poderå ver os itens cadastrados
    Se näo houver nenhum item cadastrado, mostrar a mensagem:
    "Näo existem itens cadastrados"
Caso o usuårio digite 3, a aplicacäo deverå ser encerrada.
*/

let option;
let items = [];

while (option != 3) {

    option = Number(prompt(`Olá usuário! Digite o número da opção desejada
        1.Cadastrar um item na lista
        2.Mostrar itens cadastrados
        3.Sair do programa.`))

    switch(option) {
        case 1:
            let item = prompt("Digite o nome do item:")
            items.push(item)
            break
        case 2:
            if(items.length == 0) {
                alert("Não existem itens cadastrados.")
            } else {
                alert(items)
            }
            break
        case 3:
            alert("Fechar programa.")
            break
        default:
            alert(`Opção invalida`)
    }
}
console.log(option, items)

/* 
let option;
let items = [];
while (option != 3) {
if(option == 1) {
    item = prompt("Digite o nome do item para cadastrar:");
    items.push(item);
} 
else if (option == 2) {
    if(items.length == 0) {
        alert("Não existem itens cadastrados.")
    } 
    else {
    alert(items);
    }
} 
else {
    
}

console.log(option, items);
} */