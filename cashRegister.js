class CashRegister {
    constructor() {
        this.transactions = [{ones: ..., changeDue: }, {}, {}]
        this.drawer = {
            ones: 5,
            fives: 5,
            tens: 5,
            twenties: 5,
            fifties: 2,
            Hundreds: 1
        }


    }

    canMakeChange() {
        let drawer = this.drawer

        return this.transactions.map((transaction) => {
            transaction.processTransaction()
            return transaction.change
        }).sort().reduce((drawer, change) => {
            // if(change === 5) {
            //     drawer.fives -= 1;
            // } else if(change === 35) {
            //     if(drawer.twenties > 0) {
            //         drawer.twenties -= 1
            //
            //     }
            // }

        }, this.drawer)
    }


}

module.exports = CashRegister;

class Transaction {
    constructor(bills) {
        this.bills = bills
        this.change = 0;
    }

    processTransaction() {
        if(this.bills.hundreds) {
            this.change = 85;
        } else if(this.bills.fifty) {
            this.change = 35;
        } else if(this.bills.twenty || this.bills.tens === 2) {
            this.change = 5;
        } else {
            this.change = 0;
        }
    }

}