// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //TODO add fs code here to save file
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('whatevs', markdownText);
    })
}

// Function call to initialize app
init();
