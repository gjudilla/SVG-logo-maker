// importing packages
const inquirer = require('inquirer');
const fs = require('fs');

// importing shapes
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// questions for user
inquirer
  .prompt([
    {
      type: 'text',
      name: 'logoText',
      message: 'Type in 3 letters to use for your logo.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color would you like your text to be? Enter color keyword or hexadecimal number.'
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'What shape would you like to use for your logo?',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like your shape to be? Enter color keyword or hexadecimal number.'
    },
  ])
  .then((answers) => {
    const { logoShape, logoText, textColor, shapeColor } = answers;
    let logo;

    switch (logoShape) {
      case 'Circle':
        logo = new Circle(logoText, textColor, shapeColor);
        break;
      case 'Triangle':
        logo = new Triangle(logoText, textColor, shapeColor);
        break;
      case 'Square':
        logo = new Square(logoText, textColor, shapeColor);
        break;
    }

    const renderSvg = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${logo.render()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="65">${logoText}</text>
    </svg>`;

    fs.writeFile('./example/logo.svg', renderSvg, (err) =>
      err ? console.log(err) : console.log('logo.svg generated!'));
  });


