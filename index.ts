#!USR/BIN

import inquirer from "inquirer";
 
const answers: {sentense:string} = await inquirer.prompt([
    {
        name:"sentense",
        type:"input",
        message: "enter your sentense:", 
    }
])


const word = answers.sentense.trim().split(" ")
console.log(`your words count are ${word.length}`);
 