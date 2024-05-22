/*
This demo uses three npm packages:
    1. dotenv
        This package is used to access variables/data
        stored in your local .env file.
    2. validator
        This package is used to validate/sanatize
        strings using a variety of methods 
    3. bcrypt
        Used to hash passwords
*/

// import packages
const dotenv = require("dotenv").config();
const validator = require("validator");
const bcrypt = require("bcrypt");

// validator
// validates if the string is a valid email address
let email1 = process.env.BAD_EMAIL;
let email2 = process.env.GOOD_EMAIL;
console.log("Validate emails:");

let emailOk = validator.isEmail(email1);
console.log(email1, emailOk); // returns false

email2 = validator.normalizeEmail(process.env.GOOD_EMAIL).trim();
console.log("Normalized:", email2); // returns sanitized email address

emailOk = validator.isEmail(email2);
console.log(email2, emailOk); // returns true

// validates if the string is a valid date
let date1 = process.env.BAD_BIRTHDATE;
let date2 = process.env.GOOD_BIRTHDATE;
console.log("\nValidate dates:");

// using the  option to change the default date format
let dateOk = validator.isDate(date1, { format: "MM/DD/YY" });
console.log(date1, dateOk); // returns false

// using the  option to change the default date format
dateOk = validator.isDate(date2, { format: "MM/DD/YY" });
console.log(date2, dateOk); // returns true

// validates if the password is considered a strong password
// based on validator default params
let password1 = process.env.BAD_PASSWORD;
let password2 = process.env.GOOD_PASSWORD;
console.log("\nValidate password strength:");

let passwordOk = validator.isStrongPassword(password1);
// using options to return an integer score instead of boolean
let passwordScore = validator.isStrongPassword(password1, {
  returnScore: true,
});
console.log(password1, passwordOk, "Score:", passwordScore);

passwordOk = validator.isStrongPassword(password2);
// using options to return an integer score instead of boolean
passwordScore = validator.isStrongPassword(password2, {
  returnScore: true,
});
console.log(password2, passwordOk, "Score:", passwordScore);

/* 
    bcrypt

    NOTE: I am using the synchronous versions of these methods
    but it is reccommend to use the async versionsin production

    The async versions return a promise containing the result
    rather than the result itself.
*/
console.log("\nHashes via bcrypt:");

// create a hash based on a password, and 'salt' or rounds
const hash = bcrypt.hashSync(password2, 10);
console.log("Hash:", hash); // returns the hash

// check password against the generated hash
let match = bcrypt.compareSync(password1, hash);
console.log(password1, match); // returns false

// check password against the generated hash
match = bcrypt.compareSync(password2, hash);
console.log(password2, match); // returns true
