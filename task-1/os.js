/*
Description:
The os module is used to obtain informaiton about
the operating system. There are several poperties 
and methods provided to gain insights about the 
underling system the application is running on, 
such as the platform, memory, and cpu information.
*/

// import os module
const os = require("os");

// module features
const platform = os.platform(); // returns platform info
const totalmem = os.totalmem(); // returns total memory
const freemem = os.freemem(); // returns total memory
const arch = os.arch(); // returns the CPU architecture
const cpus = os.cpus(); // returns array of info about cpu cores
const release = os.release(); // returns os release version
const hostname = os.hostname(); // returns the os hostname

// output
console.log(`System Info:\n`);
console.log(`Hostname: ${hostname}`);
console.log(`OS/Platform: ${platform}`);
console.log(`Release: ${release}`);
console.log(`Architecture: ${arch}`);
console.log(`Memory: ${freemem}/${totalmem}`);
