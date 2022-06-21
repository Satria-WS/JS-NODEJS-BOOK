console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log("Filename of the current file is: ", __filename);
console.log(__dirname);




//stackoverflow.com/questions/14201475/node-js-getting-current-filename
https: console.log(__filename);
// 'F:\__Storage__\Workspace\StackOverflow\yourScript.js'
const parts = __filename.split(/[\\/]/);
console.log(parts);
/*
 * [ 'F:',
 *   '__Storage__',
 *   'Workspace',
 *   'StackOverflow',
 *   'yourScript.js' ]
 *
**/

const scriptName = __filename.split(/[\\/]/).pop(); // Remove the last array element
console.log(scriptName);
// 'yourScript.js'



const __dirname = path.dirname(__filename);

