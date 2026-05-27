// Example
function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    }

}
const func = outer();
console.log(func());

// Another Example
// count doesnt reset back to 0, because we use return inner function that keeps a reference(memory heap address) to count 
function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    }
}
const retValue = outerCount();
retValue(); // 1
retValue(); // 2
retValue(); // 2

// Real World Example
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    // We use object just for this example
    return {
        deposit: (amount) => {
            balance = balance + amount;
            console.log('Deposited', amount, ' Current Balance', balance);
        },

        withdraw: (amount) => {
            if (amount > balance) {
                console.warn('Insufficient Fund');
            } else {
                balance = balance + amount;
                console.log('Withdrawn', amount, ' Current Balance', balance);
            }
        },

        checkBalance: () => console.log('Current Balance', balance),
    }

    // function deposit(amount) {
    //     balance = balance + amount;
    //     console.log('Deposited', amount, ' Current Balance', balance);
    // }
}

const tapaScriptAccount = createBankAccount(100);
// console.log(tapaScriptAccount(300)); // 400
// console.log(tapaScriptAccount(500)); // 900

console.log(tapaScriptAccount);
console.log(tapaScriptAccount.deposit(300)); // 400
console.log(tapaScriptAccount.withdraw(700)); // Insufficient Fund
console.log(tapaScriptAccount.withdraw(50)); // 350
console.log(tapaScriptAccount.withdraw(20)); // 330
console.log(tapaScriptAccount.withdraw(50)); // 280
console.log(tapaScriptAccount.withdraw(150)); // 130
console.log(tapaScriptAccount.checkBalance()); // Current balance 130

// Example: Closure Memory Leak
function dealingWithBigData () {
    let bigData = new Array(10000000).fill('*');

    return function () {
        console.log(bigData[3])
    }
}
const variable12 = dealingWithBigData();
console.log(variable12());