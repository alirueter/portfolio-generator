//add inquirer
const inquirer = require('inquirer');

//ask user questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

//needed to use node fs module
//const fs = require('fs');

//needed to use generatePage()
//const generatePage = require('./src/page-template.js');

//holds user command-line arguments
//const profileDataArgs = process.argv.slice(2);

//extract arguments and store them into distinct variables
//const [name, github] = profileDataArgs;

//create html file
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// })