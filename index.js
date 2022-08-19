// console.log(global);

const os = require('os')
const path = require('path')
// import os from 'os';
// import path


console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(os.totalmem());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

