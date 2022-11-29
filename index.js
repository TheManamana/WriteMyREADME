// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: function (input) {
            if (input.length < 1) {
                return console.log("You must provide a project title that is not empty");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: function (input) {
            if (input.length < 1) {
                return console.log("Your username cannot be empty.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please give me a description of your project.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps needed to install your project?',
        
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are your instructions for usage?',
        
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What credits are due to others?',
        
    },
    {
        type: 'list',
        name: 'license',
        message: "What license would you like to use for your project?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License'],
        
    },
    {
        type: 'list',
        name: 'badgeColor',
        message: "What color would you like your license badge to be?",
        choices: ['red','blue','orange','yellow','green','light green','pink','purple'],
        
    },
    {
        type: 'input',
        name: 'contribution',
        message: "How can others contribute to your project?",
        
    },

    


];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}-README.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

//TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}`;

        
        writeToFile(filename,data);
    });
 }

// Function call to initialize app
init();



