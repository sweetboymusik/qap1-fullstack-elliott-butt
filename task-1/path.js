/*
Description
*/

// import path module
const path = require("path");

// set up example variables
const path1 = "../images/cat.jpg";
const path2 = "assets/temp/images/animals/dog.png";

// path.join() method: joins all segments and normalizes them
const path3 = path.join("scripts", "javascript", "server", "..");

// return only last portion of the path
console.log(path.basename(path1));
// return only last portion of the path, remove file extention
console.log(path.basename(path1, ".jpg"));
// return only the leading directory
console.log(path.dirname(path2));
