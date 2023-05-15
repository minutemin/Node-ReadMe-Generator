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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //TODO add fs code here to save file
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
//   );
    fs.writeFileSync(fileName, data)

}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('README.md', markdownText);
    })
}

// Function call to initialize app
init();
