/*
Crie uma lista de pacientes

Cada paciente dentro da lista, deverá conter
    Nome
    Idade
    Peso
    Altura

    Escreva uma lista contendo o nome dos pacientes

*/

let pacientes = [
    {
        name: "Alexandre",
        idade: 18,
        altura: 190
    },
    {
        name: "Alexandre",
        idade: 18,
        altura: 190
    },
    {
        name: "Alexandre",
        idade: 18,
        altura: 190
    }
]

let nomesPacientes = [];

for(let paciente of pacientes) {
    nomesPacientes.push(paciente.name);
}

alert(nomesPacientes);



/* let pacientes = [
    {
        name: "Joao",
        idade: 20,
        weight: 30,
        height: 210
    },
    {
        name: "Joao",
        idade: 20,
        weight: 30,
        height: 210
    },
    {
        name: "Joao",
        idade: 20,
        weight: 30,
        height: 210
    }
];



let nomePacientes = []; */
/* for(let loop = 0; loop < pacientes.length; loop++) {
    nomePacientes[loop] = pacientes[loop].name;
} */
// For of
/* for(let paciente of pacientes) {
    nomePacientes.push(paciente.name);
}

alert(nomePacientes);

console.log(pacientes[0].name); */

/* let pacientes = {
    nome: ["Alexandre", "Pedro", "Alfredo"],
    idade: [23, 25, 30],
    peso: ["40kg", "20kg", "10kg"]
}
console.log(pacientes.nome[2], pacientes.idade[2]);
*/