const mysql = require('mysql2');
const {prompt} = require('inquirer');
const util = require('util');
const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: 'root',
    database: 'employee_db'
  }, 
  console.log(`Connected to the employee_db database.`)
);
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

const app = async() => {
  const answers = await prompt(menu)
   
    console.log(answers)
    if (answers['main menu'] === 'view all departments') {
      // query.then( departments => do something here, like log it, and then run the whole function again to go back to the start)
      console.log('i am here')
      const department = query('SELECT * from department').then(d => console.log(d)).catch(err => console.log(err))
      console.table(department)
    } else if (answers.choice === 'view all roles') {
      
        console.log(answers);
      
    } else if (answers.choice === 'view all employees') {
      
        console.log(answers);
      
    }
  
}

setTimeout(app, 1000) 







