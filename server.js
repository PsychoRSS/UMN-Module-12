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

function addDep () {
  inquirer.prompt(
  {
    type: 'input',
    name: 'addDep',
    message: 'What is the name of the new department?'
  }
  ).then ((answers) => {
    db.query(`INSERT INTO department (dep_name VALUES (${answers})) `,  (err, result) => {
      if (err) {
        console.log(err);
      }
  
      console.log(result);
    });
  }).catch((err) => {
    console.log(err)
  })

 
};

function addRol () {
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


function addEmp() {
  db.query('SELECT * FROM department', 'ORDER BY id ASC', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const depId = result.map(obj => obj.dep_name);

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the new employee?',
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'What is the new employee\'s last name?',
        },
        {
          type: 'list',
          name: 'newRole',
          message: 'What role will they be working?',
          choices: ["bath_worker", "cleaning expert"],
        },
        {
          type: 'list',
          name: 'whatManager',
          message: 'Who will be the new employee\'s manager?',
          choices: depId,
        },
      ])
      .then(answer => {
        console.log(answer);
      })
      .catch(err => {
        console.log(err);
      });
  });
};

function addEmp() {
  db.query('SELECT * FROM roles', 'ORDER BY id ASC', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const depId = result.map(obj => obj.dep_name);

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the new employee?',
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'What is the new employee\'s last name?',
        },
        {
          type: 'list',
          name: 'newRole',
          message: 'What role will they be working?',
          choices: depId
        },
        {
          type: 'list',
          name: 'whatManager',
          message: 'Who will be the new employee\'s manager?',
          choices: depId,
        },
      ])
      .then(answer => {
        console.log(answer);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

function updateEmp() {
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