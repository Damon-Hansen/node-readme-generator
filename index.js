// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Readme Title',
        name: 'title'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT', 'GNU', 'CreativeCommons']
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Instructions to use your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators',
        name: 'credits'
    },
    {
        type: 'input',
        message: "List your project's special features here",
        name: 'features'
    },
    {
        type: 'input',
        message: 'Explain to your readers how to contribute to your project',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Write tests for your application here',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userAnswers) => {
        const readmeData = generateMarkdown(userAnswers);
        writeToFile('dist/README.md', readmeData);
    })
    .catch((err) => {
        console.log(err); 
    })
}

// Function call to initialize app
init();
