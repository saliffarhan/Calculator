import inquirer from "inquirer"
const answers:{
"No1": number,
"No2": number,
"operator": string

} = await inquirer.prompt([{
    name: "No1",
    type: "number",
    message: "Write your first value: "
},
{
    name: "No2",
    type: "number",
    message: "Write your Second value: "
},
{   type: "list",
    name: "operator",
    message: "Select your operator",
    choices: ["+", "-", "*", "/", "%","**"]

}
])

const {No1,No2,operator} = answers
if(No1 && No2 && operator){
    let answer:number = 0;
    if(operator === "+"){
         answer = No1 + No2
    }else if(operator === "-"){
        answer = No1 - No2
   }else if(operator === "*"){
    answer = No1 * No2
}else if(operator === "/"){
    answer = No1 / No2
}else if(operator === "%"){
    answer = No1 % No2
}else if(operator === "**"){
    answer = No1 ** No2
} console.log("Your answer is: " + answer)
};

