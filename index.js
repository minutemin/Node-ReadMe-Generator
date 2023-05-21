// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Decription of the project:',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What commands are use to run the dependencies?'
    },
    { 
        type: 'input',
        name: 'usage',
        message: 'Please describe how this application should be used:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: [
            "MIT", 
            "Apache_2.0",
            "GPL_3.0",
            "BSD_3",
            "None",
        ]
    },
    {
        type: 'confirm',
        name: 'vscode',
        message: 'Do you want a vscode open link?'
    },
    { 
        type: 'input',
        name: 'contributions',
        message: 'What are the contributing guidelines for this project?',
    },
    {
        type : 'input',
        name: 'github',
        message: 'Please enter the github URL for this application:'
    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your contact email?'
    },
    { 
        type: 'input',
        name: 'tests',
        message: "What tests have you used for this application?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //TODO add fs code here to save file
    fs.writeFileSync(fileName, data)

}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('READMEOUTLOUD.md', markdownText);
    })
}

// Function call to initialize app
init();
