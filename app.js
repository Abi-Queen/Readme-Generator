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
                if (nameInput) {
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
                if (nameInput) {
                    return true;
                } else {
                    console.log('We need a name.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license does your project use?',
            choices: ['lic1', 'lic2', 'lic3']
        },
        
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