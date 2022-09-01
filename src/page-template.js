
//export function to generate entire page
module.exports = templateData => {
    //destructure page data by section
    const {description, contents, ...questionsEmail} = templateData;

    return `
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