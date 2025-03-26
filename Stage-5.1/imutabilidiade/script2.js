const htmlCourse = {
    course: "HTML",
    students: [{name: "Rodrigo", email: "rodrigo@email.com"}],
}

/* const jsCourse = {
    ...htmlCourse, course: "JavaScript"
} */
// Vai modificar o htmlCourse também, porque students é uma referência
// jsCourse.students.push({name: "Joao"})

// Deep Copy (cópia profunda)
/* const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    students: [...htmlCourse.students, {name: "Joao", email: "joao@email.com"}]
}

jsCourse.students.push({name: "Wesley"})
 */

const jsCourse = {
    ...htmlCourse,
    course: "JS",
}

/* jsCourse.students = [{...htmlCourse.students, name: "Wesley", name: "Pedro"}] */

jsCourse.students = [{...htmlCourse.students}, {name: "Wesley"}, {name: "Pedro"}];

console.log(htmlCourse,jsCourse)