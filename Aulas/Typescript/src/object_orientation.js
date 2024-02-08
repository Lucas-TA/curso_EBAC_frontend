"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    sayHello() {
        return `${this.nome} diz oi`;
    }
}
class BankAccout {
    constructor(accountNumber) {
        this.saldo = 0;
        this.accountNumber = accountNumber;
    }
    static returnBankNumber() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    deposit(value) {
        this.saldo += value;
    }
}
class AccountPf extends BankAccout {
    deposit(value) {
        this.saldo = value * 2;
    }
}
const pedroAccount = new AccountPf(123456);
