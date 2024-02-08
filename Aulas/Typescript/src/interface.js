"use strict";
class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
}
class SallaryAccount extends Account {
    deposit(value) {
        this.balance += value;
    }
}
class CheckingAccount extends Account {
    constructor() {
        super(...arguments);
        this.taxTransfer = 0;
    }
    transfer(value, recipient) {
        recipient.balance += (value - this.taxTransfer);
        return true;
    }
    ;
}
