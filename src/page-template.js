// add license badge at top of readme
const addBadge = licenseChoice => {
    if (licenseChoice = 'Other or None') {
        return '';
    }
    else if (licenseChoice = 'Apache License 2.0') {
        return `
        (https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        `;
    }
    else if (licenseChoice = 'ISC License') {
        return `
        (https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `;
    }
    else if (licenseChoice = 'MIT License') {
        return `
        (https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        `;
    }
    else if (licenseChoice = 'GNU GPLv3') {
        return `
        (https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `;
    }
};


//export function to generate entire page
module.exports = templateData => {
    //destructure page data by section
    const {description, contents, ...questionsEmail} = templateData;

    return `
    ####[![License](${addBadge(licenseChoice)})
    #${generateName(name)}
    ##${generateDescription(description)}
    ##${generateContents(contents)}
    ##${generateInstallation(installation)}
    ##${generateUsage(usage)}
    ##${generateLicense(license)}
    ##${generateContribution(contribution)}
    ##${generateTest(test)}
    ##${generateQuestionLink(questionLink)}
    ##${generateQuestionEmail(questionEmail)}
    `;
};