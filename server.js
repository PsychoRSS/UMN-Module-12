const inquirer =  require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Hunter,,21',
      database: 'store_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

function allQuestions () {
    inquirer.prompt ({
        type: 'list',
        name: "start_questions",
        choices: [
          "View all departments",
          "View all roles",
          "View employees",
          "New employee",
          "Add a new apartment",
          "Delete role"

        ]
    })
    .then((answers) => {
        console.log(answers.start_questions)
        
       
        if(answers['start_questions'] === 'View all departments') {
            // console.log("good");
            viewAllDep()
           
        }else if(answers['start_questions'] ===  'View all roles') {
            console.log('employees')
          viewAllRol()
        }else if(answers['start_questions'] ===  'View employees') {
          console.log("VIEWING ALL EMPLOYEES")
          viewAllEmp()
        }else if(answers['start_questions'] ===  'New employee') {

        }else if(answers['start_questions'] ===  'Add a new apartment') {

        }else if(answers['start_questions'] ===  'Delete role') {

        }
        
        else {console.log("mess up")}
    })
}

allQuestions()

function viewAllRol () {
    db.query('SELECT * FROM roles', function (err, results) {
      if(err) {
        console.log(err)
      }

        // JSON.stringify(results)
        console.log(results);
      });
};

function viewAllDep () {
  db.query(`SELECT * FROM department`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
  });
};

function viewAllEmp () {
  db.query(`SELECT * FROM employee`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
  });
};

function addDep (rawr) {

};

function addRol (rawr) {

};

function addEmp (rawr) {

};

function updateEmp(rawr) {

};