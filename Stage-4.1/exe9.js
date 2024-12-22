/*
Exercício: Calculando a média de idades dos pacientes
Imagine que você tem uma lista de pacientes com suas idades. Agora, além de listar os nomes, você também quer calcular a média das idades dos pacientes.
*/

let listaPacientes = [
    {
        nome: "Joao",
        idade: 18
    },
    {
        nome: "WebAssembly",
        idade: 20
    }
];

let nomesPacientes = [];
let somaIdades = 0;

for(let paciente of listaPacientes) {
    nomesPacientes.push(paciente.nome);
    somaIdades = somaIdades + paciente.idade;
    // somaIdades += paciente.idade;
}

// obtendo a média das idades
let mediaIdades = somaIdades / listaPacientes.length;

console.log(somaIdades, mediaIdades)


alert("Os nomes dos pacientes são: " + nomesPacientes);