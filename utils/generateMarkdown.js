// Questions for TA

//  Create a function that returns a license badge based on which license is passed in.  If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch (license) {
  //   case "MIT": 
  //     return `* [MIT license](https://choosealicense.com/licenses/mit/)`
  //   case "Apache 2.0":
  //     return `* [Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`
  //   case "GPL 3.0":
  //     return `* [GPL 3.0 license](https://choosealicense.com/licenses/gpl-3.0/)`
  //   case "BSD 3.0":
  //     return `* [BSD 3.0 license](https://opensource.org/license/BSD-3-clause/)`
  //     default:
  //     break;
  // }

  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return `* [MIT license](https://choosealicense.com/licenses/mit/)`
  } else if (license === "Apache_2.0") {
    return `* [Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === "GPL_3.0") {
    return `* [GPL 3.0 license](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license === "BSD_3") {
    return `* [BSD 3.0 license](https://opensource.org/license/BSD-3-clause/)`
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
    ${license}`
  };
}

function renderVscBadge(vscode) {
  if (vscode === true) {
    return `[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/dj-stripe/dj-stripe)`
  } else {
    return ""
  };
};
// function to render git hub input
// function renderGithub


//function to render email input




// https://choosealicense.com/licenses/  put put link for each license
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ${renderVscBadge(data.vscode)}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing Guidelines](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation Instructions
  ${data.installation} 
  ## Usage

  ## Contributing Guidelines
  ${data.contributions} 
  // [Contribution guidelines for this project](docs/CONTRIBUTING.md)

  ## Tests
  ${data.tests} 

  ## Questions
  ### Here is my github URL for this application: 
  [GitHub link](${data.github})
  
  ### Email:  ${data.email}

  
  ${renderLicenseSection(data.license)}
  ### License terms and conditions: 
  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;


