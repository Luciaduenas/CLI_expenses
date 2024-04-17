import { get, save } from "./fileMethods.js"
import inquirer from "inquirer";
import { promptNewExpense } from "./expensesPrompts.js";

const main = async () => {
    let run=true;
    while (run) {
        const action = await inquirer.prompt ([
            {
                type:"list",
                name:"menu",
                message:"Actions",
                choices: [
                    {value:1,name:"Register new expense"},
                    {value:2,name:"See all expenses"},
                    {value:99,name:"exit"}
                ],
            },
        ]);
        switch(action.menu){
            case 1:
                await createExpense();
                break;
            case 2:
                await readExpenses();
                break;
            case 99:
                run=false;
                console.log ("You have close the app");
            };
                break;      
        }
        console.log ("Thank you for using our expenses tracker");
    }
    
    main();

    async function createExpense(){
        console.log("Lets register a new expense...");
        const newExpenseData=await promptNewExpense();
        console.log("In progress:",newExpenseData);
        const currentExpenses=await get("expenses");
        //Aca podes agregar una funcion de validacion para newUserData
        currentExpenses.push(newExpenseData);
        await save("expenses",currentExpenses);
    }
    
    async function readExpenses() {
        const currentExpenses=await get("expenses");
        console.log(currentExpenses);
    }
