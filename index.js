const fs = require('fs')
const inquirer = require('inquirer');
const createTemplate = require('./src/generateMarkdown')


const projectPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Please tell us what motivated you!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'whyTho',
            message: 'Why did you build this project? (Other than for homework)',
            validate: whyThoInput => {
                if (whyThoInput) {
                    return true;
                } else {
                    console.log('Really, why tho?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
            validate: problemInput => {
                if (problemInput) {
                    return true;
                } else {
                    console.log('Please tell us what problems it solves.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
            validate: learnInput => {
                if (learnInput) {
                    return true;
                } else {
                    console.log('Please tell us what you learned!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please tell us how to install.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Short and concise instructions are fine.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, tutorials, or other additions aside from yourself to your project.',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Short and concise instructions are fine.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the type of license you own.',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicensed']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide examples of how to run tests on your app.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Short and concise instructions are fine.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your Github profile link for future references:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide a github profile link');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Share your email address with the community:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('This is important.');
                    return false;
                }
            }
        },
    ])
}






projectPrompts()
    .then((answers) => {
        fs.writeFile('README.md', createTemplate(answers), err => {
            if (err) throw err;
        })
    })
    .catch(err => {
        console.log(err);
    });

