// add table of contents how???

// add license badge at top of readme
function addBadge(license) {
    /*if (licenseChoice = 'Other or None') {
        return '';
    }
    else if (licenseChoice = 'Apache License 2.0') {
        return `
        [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `;
    }
    else if (licenseChoice = 'ISC License') {
        return `
        [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `;
    }
    else if (licenseChoice = 'MIT License') {
        return `
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

        `;
    }
    else if (licenseChoice = 'GNU GPLv3') {
        return `
        [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `;
    }*/

    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    `

};

// add text input to license sec. if licenseChoice is "Other or None"
const generateLicenseInfo = licenseInfoText => {
    return `
    ${licenseInfoText}
    `;
};

//export function to generate entire page
module.exports = templateData => {
    //destructure page data by section
    //const {license, name, ...questionEmail} = templateData;

    return `
${addBadge(templateData.license)}
# Project Name
${templateData.name}
## Description
${templateData.description}
## Table of Contents
${templateData.contents}
## Installation
${templateData.installation}
## Usage
${templateData.usage}
## License
${templateData.license}
${templateData.licenseInfo}
## Contribution
${templateData.contribution}
## Tests
${templateData.test}
## Questions
Please contact me with quesitons at:
[GitHub](${templateData.questionLink})
[Email](${templateData.questionEmail})
`;
};