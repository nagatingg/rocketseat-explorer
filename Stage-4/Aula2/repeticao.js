/* for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue; // ou break, que pausa o for
    }
    console.log(i);
}
 */


/* let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
} */

// for of
/* let name = "Wesley";
let names = ["Joao", "Pedro", "Lucas"];

for (let name of names) {
    console.log(name);
} */

// for in
let person = {
    name: "Wesley",
    age: 28,
    weight: 80
}

for (let propriedade in person) {
    console.log(propriedade);
    console.log(person["name"]);
    console.log(person.name);
    console.log(person[propriedade]);
}