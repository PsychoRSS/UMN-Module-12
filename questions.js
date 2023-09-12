const inquirer =  require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = require('./config/connection')



function fetchDepartments() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM department', 'ORDER BY id ASC', (err, result) => {
        if (err) {
          reject(err);
        } else {
          const depId = result.map(obj => obj.dep_name);
          resolve(depId);
        }
      });
    });
  }



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
  fetchDepartments().then((res) => {
    console.table("Departments",res)
  }).catch((err)=>{console.log(err)})
};
viewAllDep()
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
    const department = fetchDepartments()

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