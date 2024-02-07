let myMap = new Map();

myMap.set("nome", "valor");

console.log(myMap);

const nome = myMap.get("nome");
console.log(nome)

console.log(myMap.size)

console.log(myMap.has('nome'))

for (let valor of myMap.values()) {
    console.log(valor)
}
for (let key of myMap.keys()) {
    console.log(key)
}
for (let entrada of myMap.entries()) {
    console.log(entrada)
}
for (let [chave, valor] of myMap.entries()) {
    console.log(`${chave} e ${valor}`)
}

// myMap.delete("nome");
// console.log(myMap)