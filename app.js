const fs = require('fs');
const generatePage = require('./src/page-template.js');

//slice will return brand new array based on process.argv starting at 3rd index
const profileDataArgs = process.argv.slice(2);
const [name,github] = profileDataArgs;

//first argument = file name, second argument = data, third agrument = callback function will handle errors
fs.writeFile("index.html", generatePage(name,github), err => {
    if (err) throw new Error (err);
    console.log("Portfolio complete! Check out index.html to see the output!");
});


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