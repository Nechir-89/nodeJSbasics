import {
  arch,
  cpus,
  totalmem,
  freemem,
  type,
  homedir,
  hostname,
  platform
} from 'os';

// import { arch, platform } from 'process';

// const arch = os.arch()


console.log("\nServer OS Information");
console.log("-----------------------");
console.log(`- OS architecture: ${arch}`);
OS_CPUs();
console.log(`\n- OS type: ${type()}`);
console.log(`- User's home directory: ${homedir()}`);
console.log(`- OS host name: ${hostname()}`);
console.log(`- OS platform: ${platform()}`);

console.log(`\n- System memory: ${(totalmem() / 1024) / 1024} MBs`);
console.log(`- Free memory: ${(freemem() / 1024) / 1024} MBs`);
console.log(`- Used memory: ${((totalmem() - freemem()) / 1024) / 1024} MBs`);




function OS_CPUs() {
  console.log(`- CPUs:`);

  cpus().forEach((cpu, index) => {
    console.log(`\tCPU ${index}:`)
    console.log(`\tCPU Model: ${cpu.model}`);
    console.log(`\tCPU Speed: ${cpu.speed}`);
    console.log(`\tCPU Times:`);
    console.log(`\t\tuser: ${cpu.times.user}`);
    console.log(`\t\tnice: ${cpu.times.nice}`);
    console.log(`\t\tsys: ${cpu.times.sys}`);
    console.log(`\t\tidle: ${cpu.times.idle}`);
    console.log(`\t\tirq: ${cpu.times.irq}`);
  });
}