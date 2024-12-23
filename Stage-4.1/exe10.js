/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima
"Paciente X possui o IMC de: Y"
Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cálculo de IMC
*/
// IMC = peso / altura * altura

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190
    },
    {
        name: "Wesley",
        age: 10,
        weight: 80,
        height: 170
    },
    {
        name: "Joao",
        age: 25,
        weight: 90,
        height: 150
    }
]

/* function calculaImc (paciente) {
    alert(`Paciente ${patients[paciente].name} possui o IMC de: 
        ${(patients[paciente].weight / ((patients[paciente].height / 100) ** 2)).toFixed(2)}
    `)
}

let qualPaciente = prompt("Digite o número do paciente para verificar o IMC: ");

calculaImc(qualPaciente); */

/* alert(`Paciente ${patients[0].name} possui o IMC de: 
    ${(patients[0].weight / ((patients[0].height / 100) ** 2)).toFixed(2)}
`);
 */

function imc (weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function calculaImc (paciente) {
    return `
        Paciente ${paciente.name} possui o IMC de: 
        ${imc(paciente.weight, paciente.height)}
    `
}

for(let paciente of patients) {
    let IMCmessage = calculaImc(paciente);
    alert(IMCmessage);
}
