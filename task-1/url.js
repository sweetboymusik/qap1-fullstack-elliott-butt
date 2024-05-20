/*
Description:
This core module is used to parse web addresses,
split them into more readable parts, and other utilites
related to URLs.
*/

// import url module
const url = require("url");

// url.parse() method: breaks down url into smaller, readable parts
// logging whole urlObject to console
const path1 = url.parse("http://www.test.com/?item=apples", true);
console.log(path1);

// logging individual properties of the urlObject
const path2 = url.parse(
  "http://www.test.com/fruit/?item=bananna&type=ripe",
  true
);
console.log(path2.hostname);
console.log(path2.pathname);
console.log(path2.search);
console.log(path2.query);

// url.format() method: returns a url string from a url object
const url1 = url.format(path1);
console.log(url1);

// url.resolve() method: resolve a target url to the base
// this will reduce the first agrument down to it's base url
const url2 = url.resolve(url1, "/cart/");
console.log(url2);
