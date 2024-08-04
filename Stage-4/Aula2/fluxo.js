
/* let temperature = 37;

if (temperature >= 37.5) {
    console.log("Está com febre")
} else if (temperature < 37.5 && temperature >= 37) {
    console.log("Febre moderada")
} else {
    console.log("Saudável")
} */



/* let expression = ""
    switch (expression) {
        case "a":
            // codigo
            console.log("a");
            break
        case "b":
            // codigo
            console.log("b");
            break
        default:
            console.log("default");
            break
    } */

/* function calculadora(number1, operador, number2) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = number1 + number2;
            break;
        case "-":
            resultado = number1 - number2;
            break;
        case "*":
            resultado = number1 * number2;
            break;
        case "/":
            resultado = number1 / number2;
            break;
        default:
            console.log("Não implementado");
            break;
    }
    return resultado;
}

console.log(calculadora(4, "+", 8)); */

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatorio";
    }
    console.log("Depois do erro");
}

try {
    sayMyName()
} catch(e) {
    console.log(e);
}