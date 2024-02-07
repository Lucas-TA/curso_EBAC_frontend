
// --> Old way

// function Pokemon(nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico");

class Pokemon {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atack(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
    recebeuAtaque() {
        console.log(`${this.nome} recebeu dano`)
        this.#hp -= 10;
    }
    exibeHp() {
        console.log(this.#hp)
    }
}
class Pikachu extends Pokemon {
    constructor() {
        super(
            'Pikachu',
            'Elétrico'
        )
    }
    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`)
    }
}

const pikachuDoAsh = new Pikachu()
pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh)
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();