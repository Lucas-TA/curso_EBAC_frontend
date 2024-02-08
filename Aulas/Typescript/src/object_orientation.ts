class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }
    sayHello():string {
        return `${this.nome} diz oi`
    }
}
class BankAccout {
    protected saldo: number = 0;
    accountNumber: number;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }
    static returnBankNumber() {
        return 125;
    }
    private getSaldo() {
        return this.saldo;
    }
    deposit(value: number) {
        this.saldo += value;
    }
}
class AccountPf extends BankAccout {
    deposit(value: number): void {
        this.saldo = value * 2;
    }
}
const pedroAccount = new AccountPf(123456);