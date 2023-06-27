const mysql = require('mysql2');
const {prompt} = require('inquirer');
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
   if(err) throw(err);
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

const newRole = [
  {
    type: 'input',
    name: 'New Role',
    message: 'What new Role would you like to create?',

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
    name: 'department id',
    message: 'What is the department id of their role?',

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
}
];

const app = async() => {
  const answers = await prompt(menu)
   
    console.log(answers)
    if (answers['main menu'] === 'view all departments') {
      viewDepartmemt();
      function viewDepartmemt() {
      
      db.query('SELECT * from department', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })};
    } else if (answers['main menu'] === 'view all roles') {
      viewRole();
      function viewRole() {
      
      db.query('SELECT * from roles', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
      
    })}
    } else if (answers['main menu'] === 'view all employees') {
      viewEmployee();
      function viewEmployee() {
      
      db.query('SELECT * from employees', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })};
    } else if (answers['main menu'] === 'add a department') {
      addDepartment();
      function addDepartment {
       inquirer.prompt(newDep)
         db.query(fs.writeFile('INSERT INTO department (department_name) VALUES("Web Development")', function (err, result){
          if(err) throw err;
          console.table(result);
          app();
         }))
       } 
      }
      /*db.query('SELECT * from department', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })*/
     /*else if (answers['main menu'] === 'add a department') {
      addDepartment();
      function addDepartment {
      
      db.query('SELECT * from department', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })}
    }*/ /*else if (answers['main menu'] === 'add a department') {
      addDepartment();
      function addDepartment {
      
      db.query('SELECT * from department', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })}
    }*/ /*else if (answers['main menu'] === 'add a department') {
      addDepartment();
      function addDepartment {
      
      db.query('SELECT * from department', function (err, result){
      if(err) throw err;
      console.table(result);
      app();
    })}
    }*/  
    }
 


setTimeout(app, 1000) 







