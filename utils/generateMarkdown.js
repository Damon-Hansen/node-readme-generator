// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions here is my contact info to reach out to me.

https://github.com/${data.github}
${data.email}
`
}

module.exports = generateMarkdown;
