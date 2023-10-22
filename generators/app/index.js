// IMPORTS

const chalk = require('chalk');
const Generator = require('yeoman-generator');


// MODULE

module.exports = class extends Generator {

// The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('advanced'); // This method adds support for a `--advanced` flag
  }

// Test method
  testMethod(){
    this.log( chalk.blue(this.appname) );
    // this.log("Test method");
  }

// Test async
  async prompting() {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: "My App", // appname return the default folder name to project
      store: true,
    },
    {
      type: 'list',
      name: 'templateType',
      message: 'Select the template wanted:',
      choices: ['choice1', 'choice2', 'choice3']
    }]);
  }





};
