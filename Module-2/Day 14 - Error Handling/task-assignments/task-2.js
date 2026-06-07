let currentBalance = 0;
let amountWithdrawn = 0;
let amountDeposited = 0;

function processPayment() {
    let continueTransaction = true;

    while (continueTransaction) {
        const typeOfProcess = prompt(
            `Current Balance: ${currentBalance}\nType of Process: [d/w/q]`
        )?.toLowerCase();

        if (typeOfProcess === 'q') {
            console.log(`Final Balance: ${currentBalance}`);
            break;
        }

        if (typeOfProcess === 'd' || typeOfProcess === 'deposit') {
            deposit();
        }

        if (typeOfProcess === 'w' || typeOfProcess === 'withdraw') {
            withdraw();
        }
    }

    function deposit() {
        try {
            const depositPrompt = Number(
                prompt('How much do you want to deposit?')
            );

            if (depositPrompt <= 0) {
                throw new Error('Deposit amount must be positive');
            }

            if (depositPrompt < 500) {
                throw new Error('Minimum deposit is 500');
            }

            if (currentBalance + depositPrompt > 3000) {
                throw new Error('Your account limit is only 3000');
            }

            currentBalance += depositPrompt;
            amountDeposited = depositPrompt;

            console.log(
                `Deposited: ${amountDeposited}, Balance: ${currentBalance}`
            );

        } catch (err) {
            console.error(err.message);
        }
    }

    function withdraw() {
        try {
            const withdrawPrompt = Number(
                prompt('How much    do you want to withdraw?')
            );

            if (withdrawPrompt <= 0) {
                throw new Error('Withdrawal amount must be positive');
            }

            if (withdrawPrompt > currentBalance) {
                throw new Error('Withdrawal amount exceeds current balance');
            }

            currentBalance -= withdrawPrompt;
            amountWithdrawn = withdrawPrompt;

            console.log(
                `Withdrawn: ${amountWithdrawn}, Balance: ${currentBalance}`
            );

        } catch (err) {
            console.error(err.message);
        }
    }
}

processPayment();