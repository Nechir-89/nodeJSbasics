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
import { stat, access, constants } from 'fs'
import { join } from 'path';
import { writeFile } from 'fs/promises';
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
CPUs:                   ${OS_CPUs()}
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
//     // writeToFile();
//   } else {
//     // we may want to append to the file
//     console.log(stats.birthtime);
//     console.log(stats.atime);
//     console.log(stats.blksize);
//     console.log(stats.blocks);
//     console.log(stats.dev);
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//   }
// });


// OS_CPUs();

function OS_CPUs() {
  let cpusData = "";
  cpus().forEach((cpu, index) => {
    cpusData = cpusData.concat(`\n\tCPU ${index}:`)
      .concat(`\n\tModel: ${cpu.model}`)
      .concat(`\n\tSpeed: ${cpu.speed}`)
      .concat(`\n\tTimes:`)
      .concat(`\n\t\tuser: ${cpu.times.user}`)
      .concat(`\n\t\tnice: ${cpu.times.nice}`)
      .concat(`\n\t\tsys: ${cpu.times.sys}`)
      .concat(`\n\t\tidle: ${cpu.times.idle}`)
      .concat(`\n\t\tirq: ${cpu.times.irq}`);
  });
  return cpusData;
}