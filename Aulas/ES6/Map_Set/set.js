const cpf = new Set();

cpf.add('36732628070');
cpf.add('80687288053');
cpf.add('93403147002');

console.log(cpf.keys())
console.log(cpf.values())


const array = ['Gian', 'Lucas', 'Amanda', 'Pedro', 'Lucas', 'Matheus', 'Gian'];

const arraySet = new Set([...array]); //set remove itens duplicados
console.log(arraySet)

const arrayNotDuplicated = [...arraySet] //transformando Set em array normal
console.log(arrayNotDuplicated)