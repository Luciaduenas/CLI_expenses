import inquirer from "inquirer";
import DatePrompt   from "inquirer-date-prompt";

inquirer.registerPrompt ("date", DatePrompt);

export async function promptNewExpense (){
    return await inquirer.prompt (newExpensePrompt);

}

const newExpensePrompt =[
    {
        type:"date",
        name:"date",
        message: "Date",
        locale:"en-US",
        format:{month:"short",hour:undefined,minute:undefined},
    },
    {
        type:"list",
        name:"category",
        message: "Expense Category",
        choices: ["Groceries", "Education", "Car/Transport","Clothing", "Entertainment", "Other"  ],
    },
    {
        type:"number",
        name:"amount usd",
        message: "Enter amount in usd"
    },
    {
        type:"confirm",
        name:"frequency",
        message:"Is this a regular expense?",
    },

]