"use strict";

require("core-js/modules/es.array.reduce.js");
const redesSociais = ['Facebook', 'Instagram', 'Youtube'];

// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho uma conta na rede social ${redesSociais[i]}`);
// }

redesSociais.forEach(item => {
  console.log("Eu tenho uma conta na rede social ".concat(item));
});
const students = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
const studentsAndCourse = students.map(itemAtual => {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(studentsAndCourse);
const paula = studentsAndCourse.find(item => item.nome == 'James');
console.log(paula);
const studentsIndice = studentsAndCourse.findIndex(item => item.nome == 'Julia');
console.log(studentsIndice);
studentsAndCourse.push({
  nome: 'Lucio',
  curso: 'Backend'
});
const checkCurso = studentsAndCourse.every(item => item.curso == 'Frontend');
console.log(checkCurso);
const atLeastOneCourse = studentsAndCourse.some(item => item.curso == "Backend");
console.log(atLeastOneCourse);
function filterStudentsBackend(student) {
  return student.curso == "Backend";
}
const filterBackend = studentsAndCourse.filter(filterStudentsBackend);
console.log(filterBackend);
const nums = [10, 20, 30, 10];
const sumNums = nums.reduce((acumulador, itemAtual) => {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(sumNums);