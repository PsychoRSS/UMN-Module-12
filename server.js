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

function viewAllRol () {
    db.query('SELECT * FROM roles', function (err, results) {
      if(err) {
        console.log(err)
      }

        JSON.stringify(console.log(results))
        // console.log(results);
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
  inquirer.prompt(
  {
    type: 'input',
    name: 'addDep',
    message: 'What is the name of the new department?'
  }
  )

  db.query(``, 3, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
  });
};

function addRol (rawr) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the pay for this new role?'
    },
    {
      type: 'input',
      name: 'whatDep',
      message: 'What department is this role for?'
    }
  ]).then ((answer) => {
    console.log(answer.name)
    console.log(answer.salart)
    console.log(answer.salart)
  }).catch ((err) => {
    cconsole.log(err)
  })

  db.query(``, 3, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
  });
};


function addEmp (rawr) {
  const departments = db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
    for (let i = 0; i < result.id.length; i++) {
      const element = array[i];
      
    }
    const depId = result[0].id
    const depTitle = result
    console.log(depId)
    console.log(depTitle)
    // const allDeps = dep
    return 
  });
  departments
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new employee?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the new employees last name?'
    },
    {
      type: 'input',
      name: 'newRole',
      message: 'What role will they be working?'
    },  
    {
      type: 'list',
      name: 'whatManager',
      message: 'Who will be the new employees manager?',
      choices: [

      ]
    },
  ]).then ((answer) => {
    console.log(answer.name)
    console.log(answer.salart)
    console.log(answer.salart)
  }).catch ((err) => {
    cconsole.log(err)
  })
  // db.query(``, 3, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log(result);
  // });
};

function updateEmp(rawr) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the pay for this new role?'
    },
    {
      type: 'input',
      name: 'whatDep',
      message: 'What department is this role for?'
    }
  ]).then ((answer) => {
    console.log(answer.name)
    console.log(answer.salart)
    console.log(answer.salart)
  }).catch ((err) => {
    cconsole.log(err)
  })
  db.query(``, 3, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(result);
  });
};