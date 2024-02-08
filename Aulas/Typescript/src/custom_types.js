"use strict";
const students = [
    {
        nome: "Carlos",
        cursos: ["Frontend", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Frontend", "Python"],
        idade: 23,
    }
];
const newStudent = {
    nome: "Lucas",
    idade: 32
};
function showStudent(student) {
    console.log(student.nome);
}
