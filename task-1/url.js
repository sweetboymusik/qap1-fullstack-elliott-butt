/*
Description:
This module is a utiility for handling URL strings.
With it you can parse web addresses, split them into
more readable parts, and other utilites related to URLs.
*/

// import url module
const url = require("url");

// breaks down url into smaller, readable parts
// args: url string, parse url string
const path1 = url.parse("http://www.test.com/?item=apples", true);
console.log(path1);

// logging individual properties of the urlObject
// args: url string, parse url string
// use dot notation to access specific properties
const path2 = url.parse(
  "http://www.test.com/fruit/?item=bananna&type=ripe",
  true
);
console.log(path2.hostname);
console.log(path2.pathname);
console.log(path2.search);
console.log(path2.query);

// returns a url string from a url object
// args: url object
const url1 = url.format(path1);
console.log(url1);

// resolve a target url to the base
// this will reduce the first agrument down to it's base url
// args: url string, url string
const url2 = url.resolve(url1, "/cart/");
console.log(url2);
