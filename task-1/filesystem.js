/*
Description:
Module used to access and manipulate the file system.
There are three sets of APIs: promises, callback,
and synchronus. Can be used to read, write, update,
append, and delete files, among other operations.
*/

// import fs module
// I will be using the synchronous API for these examples
const fs = require("fs");

// writes new file to disc
// args: file name, file contents
try {
  fs.writeFileSync("write-file.txt", "Wrote to new file!");
  console.log("New file written!");
} catch (error) {
  console.error(error);
}

// overwrites specified file
// args: file name, file contents
try {
  fs.writeFileSync("write-file.txt", "Overwrote new file!");
  console.log("New file overwritten!");
} catch (error) {
  console.error(error);
}

// appends to specified file
// args: file name, file contents
try {
  fs.appendFileSync("write-file.txt", "\nAppended text!");
  console.log("New file appended!");
} catch (error) {
  console.error(error);
}

// reads specified file
// args: file name
try {
  const content = fs.readFileSync("write-file.txt");
  console.log("----------------");
  console.log("File contents:");
  console.log(content.toString("utf-8"));
  console.log("----------------");
} catch (error) {
  console.error(error);
}

// renames specified file
// args: file name, file contents
try {
  fs.renameSync("write-file.txt", "renamed-file.txt");
  console.log("File renamed!");
} catch (error) {
  console.error(error);
}

// reads directory contents
// args: directory name
try {
  const content = fs.readdirSync("../task-1");
  console.log("----------------");
  console.log("Directory contents:");
  console.log(content);
  console.log("----------------");
} catch (error) {
  console.error(error);
}

// deletes specified file
// args: file name
try {
  fs.unlinkSync("renamed-file.txt");
  console.log("File deleted!");
} catch (error) {
  console.error(error);
}
