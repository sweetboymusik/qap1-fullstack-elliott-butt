/*
Description:
This module provides methods for working with directories
and file paths. Allows you to work with your file-
system without having to worry about platform 
idiosyncracies, making it reliable across
various platforms.
*/

// import path module
const path = require("path");

// set up example variables
const path1 = "../images/cat.jpg";
const path2 = "assets/temp/images/animals/dog.png";

// joins all segments and normalizes them
// args: path segments
const path3 = path.join("scripts", "javascript", "server", "..");

// return only last portion of the path
// args: path
console.log(path.basename(path1));

// return only last portion of the path, remove file extention
// args: path
console.log(path.basename(path1, ".jpg"));

// return only the leading directory
// args: path
console.log(path.dirname(path2));
