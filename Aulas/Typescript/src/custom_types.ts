type student = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const students: student[] = [
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
]
const newStudent: student = {
    nome: "Lucas",
    idade: 32
}
function showStudent(student: student) {
    console.log(student.nome)
}