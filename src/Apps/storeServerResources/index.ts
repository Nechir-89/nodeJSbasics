// TODO:
// - add cpus
// - 


// store server information in text file
import {
  arch,
  cpus,
  totalmem,
  freemem,
  type,
  homedir,
  hostname,
  platform,
  version,
  release
} from 'os';
// import { writeFile } from 'fs';
// import { stat, access, constants } from 'fs'
import { join } from 'path';
import { writeFile } from 'fs/promises'
let filePath = join(__dirname, 'files', 'server.txt');

let data = `Server and OS information
--------------------------
OS architecture:        ${arch()}
OS type:                ${type()}
User's home directory:  ${homedir()}
OS host name:           ${hostname()}
OS platform:            ${platform()}
OS version:             ${version()}
OS release:             ${release()}
System memory:          ${(totalmem() / 1024) / 1024} MBs
Free memory:            ${(freemem() / 1024) / 1024} MBs
Used memory:            ${((totalmem() - freemem()) / 1024)} MBs
`;

async function writeToFile() {
  try {
    await writeFile(filePath, data);
    console.log(`Data stored in file: ${filePath}`)
  } catch (err) {
    console.log(err);
  }
};

writeToFile();

// access(filePath, constants.F_OK, (err) => {
//   console.log(constants.F_OK)
//   console.log(`File ${filePath} ${err ? "doesn't" : "does"} exist`)
// })

// stat(filePath, (err, stats) => {
//   if (err) {
//     console.log(err.message);
//     writeToFile();
//   } else {
//     // we may want to append to the file
//   }
// })


// OS_CPUs();

// function OS_CPUs() {
//   console.log(`- CPUs:`);

//   cpus().forEach((cpu, index) => {
//     console.log(`\tCPU ${index}:`)
//     console.log(`\tCPU Model: ${cpu.model}`);
//     console.log(`\tCPU Speed: ${cpu.speed}`);
//     console.log(`\tCPU Times:`);
//     console.log(`\t\tuser: ${cpu.times.user}`);
//     console.log(`\t\tnice: ${cpu.times.nice}`);
//     console.log(`\t\tsys: ${cpu.times.sys}`);
//     console.log(`\t\tidle: ${cpu.times.idle}`);
//     console.log(`\t\tirq: ${cpu.times.irq}`);
//   });
// }