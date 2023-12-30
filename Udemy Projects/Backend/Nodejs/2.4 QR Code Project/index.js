import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
*/
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'URL',
        message: 'what is your name? ',
        default: 'www.goose.com',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  `  // console.log("Hello " + JSON.stringify(answers.comments, null, ' '));`
    console.log(answers);
    var qr_png= qr.image(answers.URL, { type: 'png' });
    // 3. Create a txt file to save the user input using the native fs node module.
    qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
    
    var png_string = qr.imageSync('I love QR!', { type: 'png' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      throw error;
    } else {
      // Something else went wrong
    }
  });






