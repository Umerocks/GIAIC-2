"use strict";
/* ATM machine should perform followin functions
1. Greets and asks for a pin and verify it
2. Adds options to select Withdraw funds, Check Balance, and exit
3. Showing the remaining balance amount after deduction of funds
4. If balance is low or 0, display a message about low funds or no funds */
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var pinNumber = 1234;
var balance = 10000;
var pinAttempts = 2;
// PIN verification loop
for (pinAttempts; pinAttempts >= 0; pinAttempts--) {
    var pinVerify = await inquirer_1.default.prompt([{
            name: 'pin',
            type: 'number',
            message: '\tEnter a valid pin number to proceed:\t',
            default: '\nPin is 1234'
        }]);
    if (pinVerify.pin === pinNumber) {
        console.log('\n\tPin verified successfully!\t\n');
        break; // Exit the loop if PIN is verified
    }
    else if (pinAttempts === 0) {
        console.log('\tALERT: Your account is locked, contact your bank or call 1800-bank.');
        process.exit(); // End the program if PIN attempts are exhausted
    }
    else {
        console.log('Invalid pin entered, try again!');
        // if (pinAttempts === 0) {
        //     console.log('\tALERT: Your account is locked, contact your bank or call 1800-bank.');
        //     process.exit(); // End the program if PIN attempts are exhausted
        // }
    }
}
// Transaction loop
while (true) {
    // Transaction menu
    var atmOptions = await inquirer_1.default.prompt([{
            message: 'Welcome! Select your desired option:',
            name: 'menu',
            type: 'list',
            choices: ['Cash Withdrawals', 'Rapid Cash', 'Balance Inquiry', 'End Session'],
        }]);
    if (atmOptions.menu === 'Cash Withdrawals') {
        var cashOut = await inquirer_1.default.prompt([{
                name: 'moneyout',
                type: 'number',
                message: '\tEnter your desired amount!\t',
            }]);
        if (cashOut.moneyout <= balance) {
            console.log("\tTransaction successful! \n \tYour withdrawal amount is ".concat(cashOut.moneyout, "."));
            console.log("\tand your remaining balance is ".concat(balance - cashOut.moneyout, "."));
        }
        else {
            console.log('\tAmount exceeds available balance or insufficient balance!\t');
        }
    }
    else if (atmOptions.menu === 'Balance Inquiry') {
        console.log("\tYour available balance is ".concat(balance, "\t"));
    }
    else if (atmOptions.menu === 'End Session') {
        console.log('Thank you for using ATM services.');
        process.exit(); // End the program
    }
    else if (atmOptions.menu === 'Rapid Cash') {
        var rapidCash = await inquirer_1.default.prompt([{
                message: 'Select Rapid Cash for instant withdrawal!',
                name: 'rapidAmount',
                type: 'list',
                choices: [1000, 3000, 5000, 8000, 10000],
            }]);
        if (rapidCash.rapidAmount <= balance) {
            balance -= rapidCash.rapidAmount;
            console.log("\tTransaction successful! \n\tYour remaining balance is ".concat(balance, "."));
        }
        else {
            console.log('\tAmount exceeds available balance or insufficient balance!\t');
        }
    }
}
