const inquirer = require('inquirer');

// function reutnrs running of inquirer.prompt which is a Promise. we put into then, whatever we wish to take place after the promise is resolved
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            //nameInput is argument for validate method
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter GitHub Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true,
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    if(!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    =================
    Add a New Project
    =================  
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Please enter a GitHub link to your project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })

//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//const pageHtml = generatePage(name,github);

//first argument = file name, second argument = data, third agrument = callback function will handle errors
//fs.writeFile("index.html", generatePage(name,github), err => {
   // if (err) throw new Error (err);
   // console.log("Portfolio complete! Check out index.html to see the output!");
//});


//print items in array one by one 
//const printProfileData = profileDataArr => {
    //this
    //for (let i=0; i < profileDataArr.length; i++) {
    //    console.log(profileDataArr[i]);
   // }

   // console.log("=============");

    // is the same as this ...
   // profileDataArr.forEach(profileItem => console.log(profileItem));

//};

//printProfileData(profileDataArgs);