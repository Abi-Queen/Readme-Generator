const inquirer = require('inquirer'); 
const generateReadme = require('./src/page-template');
const {writeFile} = require('./utils/generateMarkdown');
const fs = require("fs");

// capture user input to questions with inquirer
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
                if (descriptionInput) {
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
            type: 'list',
            name: 'license',
            message: 'Which license does your project use?',
            choices: ['Apache License 2.0', 'ISC License', 'MIT License', 'GNU GPLv3', 'Other or None']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain how people can contriute to your project.',
            validate: contributionInput => {
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
            name: 'test',
            message: 'Please describe the tests you have run on your project and provide an example.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please describe your tests.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsLink',
            message: 'What is your GitHub username?',
            validate: questionsLinkInput => {
                if (questionsLinkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please enter your email address.',
            validate: questionsEmailInput => {
                if (questionsEmailInput) {
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
    .then(readmeData => {

        fs.writeFileSync("./dist/README.md", generateReadme(readmeData), 'utf-8');
        /*return generateReadme(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .catch(err => {
        console.log(err); */
    });