const inquirer =  require('inquirer');
const mysql = require('mysql2');




  

function allQuestions () {
    inquirer.prompt ({
        type: 'list',
        name: "start_questions",
        choices: [
          "View all departments",
          "View all roles",
          "View employees",
          "Add a new employee",
          "Add a new apartment",
          "Update employee role"

        ]
    })
    .then((answers) => {
        console.log(answers.start_questions)
        
       
        if(answers['start_questions'] === 'View all departments') {
         
            viewAllDep()
          
        }else if(answers['start_questions'] ===  'View all roles') {

          viewAllRol()

        }else if(answers['start_questions'] ===  'View employees') {
        
          viewAllEmp()

        }else if(answers['start_questions'] ===  'Add a new employee') {

          addEmp()

        }else if(answers['start_questions'] ===  'Add a new apartment') {

          addDep()

        }else if(answers['start_questions'] ===  'Update employee role') {

          updateEmp()

        }
        
        else {console.log("mess up")}
    }).catch ((err)=> {
      console.log(err);
    }) 
}

allQuestions()

