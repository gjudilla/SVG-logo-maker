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
    const { logoShape } = answers;
    let logo;
    switch (logoShape) {
      case 'Circle':
        logo = new Circle(answers.logoText, answers.textColor, answers.shapeColor);
        break;
      case 'Triangle':
        logo = new Triangle(answers.logoText, answers.textColor, answers.shapeColor);
        break;
      case 'Square':
        logo = new Square(answers.logoText, answers.textColor, answers.shapeColor);
        break;
    }
    fs.writeFile('./example/logo.svg', logo.renderSvg(), function (err) {
      if (err) throw err;
      console.log('logo.svg generated!');
    });
  });



