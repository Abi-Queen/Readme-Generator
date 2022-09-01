const inquirer = require('inquirer'); 
const generatePage = require('./src/page-template');
const {writeFile} = require('.utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter project name. (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A name is needed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project. Suggested prompts: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
            validate: descriptionInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('A description is needed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain how to install your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Installation instructions are needed.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to use your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Usage instructions are needed.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license does your project use?',
            choices: ['Apache License 2.0', 'ISC License', 'MIT License', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how people can contriute to your project.',
            validate: usageInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please explain how people can contriute to your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe your tests.',
            validate: usageInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please describe your tests.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub username?',
            validate: usageInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        }
    ])
};

promptUser()
    .then(promptDescription)
    .then(readmeData => {
        return generateReadme(portfolioData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });