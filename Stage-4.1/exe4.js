const nameStudent = prompt("Digite o nome do Aluno: ");
let note1 = prompt("Digite a nota 1 do aluno: ");
let note2 = prompt("Digite a nota 2 do aluno: ");
let note3 = prompt("Digite a nota 3 do aluno: ");

let media = (Number(note1) + Number(note2) + Number(note3)) / 3;

media = media.toFixed(2);

/* Boolean */
/*
let result  = media > 6;

alert(result)
*/

if (media > 6) {
    alert("O aluno passou de ano")
}   else {
    alert("O aluno reprovou")
}

