const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
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