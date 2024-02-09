"use strict";
// Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação
//que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma
//função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
function firstFunction(a, b) {
    return a * b;
}
console.log(firstFunction(20, 4));
function secondFunction(nome) {
    return `Olá, ${nome}!`;
}
console.log(secondFunction('Lucas'));
