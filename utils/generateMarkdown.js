// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

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
  if (license === "None") {
    return "";
  } else {
    return `* [license](#license)`
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [installation](#installation)
  ${renderLicenseLink(data.license)}
  * [usage](#usage)
  
  ## Installation Instructions

  ## Usage

  ## Contributing Guidelines
  [Contribution guidelines for this project](docs/CONTRIBUTING.md)

  ## Tests

  ## Questions

  ${renderLicenseSection(data.license)}
  
`;
}

module.exports = generateMarkdown;


//[GitHub Pages](https://pages.github.com/) how to LINK