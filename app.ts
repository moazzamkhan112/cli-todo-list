import inquirer from "inquirer"
import chalk from "chalk"

let todos =[] 
let condtion = true ;while(condtion);

let todosQuestion = await inquirer.prompt ([
    {
        name:"firstQuestion",
        message:"what would you like to add in your todo",
        type:"input",
        },


{
    name: "secondQuestion",
    type:"confirm",
    message:"what woul you like to add in your todo",
    default:"true"

}
]
);

 todos.push(todosQuestion.firstQuestion);
 console.log(todos)
 condtion=(todosQuestion.secondQuestion)