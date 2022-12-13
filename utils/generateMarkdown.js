// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  var bColor;
  var licenseID;

  switch (color) {
    case 'red': bColor = 'red'
      break;

    case 'blue': bColor = 'blue';
      break;

    case 'orange': bColor = 'orange';
      break;

    case 'yellow': bColor = 'yellow';
      break;

    case 'green': bColor = 'green';
      break;

    case 'light green': bColor = 'brightgreen';
      break;

    case 'pink': bColor = 'ff69b4';
      break;

    case 'purple': bColor = 'blueviolet';
      break;


  }

  switch (license) {
    case 'GNU AGPLv3': licenseID = 'agpl-3.0';
      break;

    case 'GNU GPLv3': licenseID = 'gpl-3.0';
      break;

    case 'GNU LGPLv3': licenseID = 'lgpl-3.0';
      break;

    case 'Mozilla Public License 2.0': licenseID = 'mpl-2.0';
      break;

    case 'Apache License 2.0': licenseID = 'apache-2.0';
      break;

    case 'MIT License': licenseID = 'mit';
      break;

    case 'Boost Software License 1.0': licenseID = 'bsl-1.0';
      break;

    case 'The Unlicense': licenseID = 'unlicense';
      break;

    case 'No License': licenseID = '';
      break;

  }

  if (license == 'No License') {
    return "";
  } else {
    return `![Badge](https://img.shields.io/static/v1?label=license&message=${licenseID}&color=${bColor})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var urlAdd;

  switch (license) {
    case 'GNU AGPLv3': urlAdd = 'agpl-3.0';
      break;

    case 'GNU GPLv3': urlAdd = 'gpl-3.0';
      break;

    case 'GNU LGPLv3': urlAdd = 'lgpl-3.0';
      break;

    case 'Mozilla Public License 2.0': urlAdd = 'mpl-2.0';
      break;

    case 'Apache License 2.0': urlAdd = 'apache-2.0';
      break;

    case 'MIT License': urlAdd = 'mit';
      break;

    case 'Boost Software License 1.0': urlAdd = 'bsl-1.0';
      break;

    case 'The Unlicense': urlAdd = 'unlicense';
      break;

    case 'No License': urlAdd = '';
      break;

  }
  if (license == 'No License') {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${urlAdd}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, color) {

  var licenseInfo = `${renderLicenseBadge(license, color)} \n
  This is licensed under ${license}. Information about this license can be found at ${renderLicenseLink(license)}`
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license, data.badgeColor)}
  


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Testing

${data.tests}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license, data.badgeColor)}

## Questions 

Send me questions at: ${data.email}

My Github: https://github.com/${data.github}/

`;
}

module.exports = generateMarkdown;
