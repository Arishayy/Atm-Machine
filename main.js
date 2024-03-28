#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t WELCOME TO JS BANK's ATM \n");
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter Your Id Name",
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Your Account's Pin",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current ", "Saving"],
        messages: "Select your Account Type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your Transaction Type: ",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "5000", "10000", "20000"],
        message: "Select Your Amount: ",
        when(answers) {
            return answers.transactionType == "Fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const balance = 55000;
    console.log("previous Balance", balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("Your Remaining Balance Is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
