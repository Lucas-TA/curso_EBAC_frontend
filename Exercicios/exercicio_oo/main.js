//Crie uma classe de uma abstração;

function Animal(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;

    this.communicate = function() {
        console.log("**Makes a noise**")
    }
}

//Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
function Lion(name, weight, height) {
    Animal.call(this, name, weight, height);
}
function Dog(name, weight, height) {
    Animal.call(this, name, weight, height);
}
function Horse(name, weight, height) {
    Animal.call(this, name, weight, height);
}
//Crie pelo menos três instâncias de objetos;
const Josemar = new Lion("Josemar", 193, 156);
const Joao = new Dog("Josemar", 27, 75);
const Romario = new Horse("Josemar", 240, 240);

Josemar.communicate();
Joao.communicate();
Romario.communicate();

console.log(Josemar);
console.log(Joao);
console.log(Romario);
