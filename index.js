import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentense",
        type: "input",
        message: "enter sentense",
    }
]);
const words = answers.sentense.trim().split(" ");
console.log(`your sentense count is ${words.length}`);
