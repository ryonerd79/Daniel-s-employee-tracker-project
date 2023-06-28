const mysql = require('mysql2');
const { prompt } = require('inquirer');
const util = require('util');
const { type } = require('os');
const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);
db.connect((err) => {
  if (err) throw (err);
  console.log('Connected as id' + db.threadId);
})
const query = util.promisify(db.query).bind(db);
db.query('query', (err, data) => {
});
const menu = [
  {
    type: 'list',
    name: 'main menu',
    message: 'What would you like to do?',
    choices: [
      'view all departments',
      'view all roles',
      'view all employees',
      'add a department',
      'add a role',
      'add a employee',
      'update an employee role',

    ]
  }
];

const newDep = [
  {
    type: 'input',
    name: 'New Department',
    message: 'What new department would you like to create?',

  }
];

const newRol = [
  {
    type: 'input',
    name: 'New Role',
    message: 'What new Role would you like to create'

  },

  {
    type: 'input',
    name: 'Salary',
    message: 'What is the salary of this role?',

  },

  {
    type: 'input',
    name: 'department id',
    message: 'What is the department id of this role?',

  }
];

const newEmployee = [
  {
    type: 'input',
    name: 'first name',
    message: 'What is the first name of the employee?',

  },

  {
    type: 'input',
    name: 'last name',
    message: 'What is the last name of the employee?',

  },

  {
    type: 'input',
    name: 'role id',
    message: 'What is the role id of their role?',

  },

  {
    type: 'input',
    name: 'manager-s-name',
    message: 'Who is their manager?',

  }
];

const employeesNewRole = [
  {
    type: 'input',
    name: 'New Role for Employee',
    message: 'What is the new role for the employee?',
  },

  {
    type: 'list',
    name: 'Which employee',
    message: 'choose the following',
    choices: [
      "Daniel Roh",
      "Steven Schrimmer",
      "Dustin Bonilla",
      "Luke DenHartog"
    ]
  }
];

function viewDepartmemt() {

  db.query('SELECT * from department', function (err, result) {
    if (err) throw err;
    console.table(result);
    app();
  })
};

function viewRole() {

  db.query('SELECT * from role', function (err, result) {
    if (err) throw err;
    console.table(result);
    app();

  })
};

function viewEmployee() {

  db.query('SELECT * from employee', function (err, result) {
    if (err) throw err;
    console.table(result);
    app();
  })
};

async function addDepartment() {
  const newDepartmentResponse = await prompt(newDep)

  db.query('INSERT INTO department (department_name) VALUES(?)', newDepartmentResponse['New Department'], function (err, result) {
    if (err) throw err;
    viewDepartmemt();
    app();
  })
};

async function addRole() {
  const addRoleResponse = await prompt(newRol)

  let values = [
    addRoleResponse['New Role'],
    addRoleResponse['Salary'],
    addRoleResponse['department id']
    ]
  db.query('INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)', values, function (err, result) {
    if (err) throw err;
    viewRole();
    app();
  })
};

async function addEmployee() {
  const addEmployeeResponse = await prompt(newEmployee)
  let values = [
    addEmployeeResponse['first name'],
    addEmployeeResponse['last name'],
    addEmployeeResponse['role id'],
    addEmployeeResponse['manager-s-name']
    ]
  db.query('INSERT INTO employee (first_name, last_name, role_id, manager_name) VALUES(?, ?, ?, ?)', values, function (err, result){
  if(err) throw err;
  viewEmployee();
  app();
 })
};

async function updateRole() {
  const newRoleResponse = await prompt(employeesNewRole);
  const employeeName = newRoleResponse['Which employee'];
  const newRoleId = newRoleResponse['New Role for Employee'];

  const query = 'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?';
  const params = [newRoleId, employeeName.split(' ')[0], employeeName.split(' ')[1]];

  db.query(query, params, function (err, result) {
    if (err) throw err;
    viewEmployee();
    app();
  })
};


const app = async () => {
  const answers = await prompt(menu)

  
  if (answers['main menu'] === 'view all departments') {
    viewDepartmemt();

  } else if (answers['main menu'] === 'view all roles') {
    viewRole();

  } else if (answers['main menu'] === 'view all employees') {
    viewEmployee();

  } else if (answers['main menu'] === 'add a department') {
    addDepartment();
    
  } else if (answers['main menu'] === 'add a role') {
    addRole();
    
  } else if (answers['main menu'] === 'add a employee') {
    addEmployee();
      
  } else if (answers['main menu'] === 'update an employee role') {
    updateRole();
    
  }
};



setTimeout(app, 1000)







