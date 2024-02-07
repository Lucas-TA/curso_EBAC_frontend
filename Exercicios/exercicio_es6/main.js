const students = [
    {
        nome: 'Matheus',
        nota: 10
    }, 
    {
        nome: 'Lucas',
        nota: 8.5
    },
    {
        nome: 'Maria',
        nota: 9
    },
    {
        nome: 'Carla',
        nota: 4
    }
]

function setMinimumGrade(student) {
    return student.nota >= 6;
}

const approvedStudents = students.filter(setMinimumGrade);

console.log(approvedStudents)