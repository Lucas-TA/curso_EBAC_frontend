class Account {
    accountNumber: number;
    balance: number = 0;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }
}
class SallaryAccount extends Account {
    deposit(value: number) {
        this.balance += value;
    }
}

interface ITransacional {
    transfer: (value: number, recipient: Account) => boolean;
    taxTransfer: number;
}
class CheckingAccount extends Account implements ITransacional {
    transfer(value: number, recipient: Account) {
        recipient.balance += (value - this.taxTransfer)
        return true
    };
    taxTransfer: number = 0;

}