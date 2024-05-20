/*
Description:
Module used to create, fire, and listen for events.
*/

// import events module
const events = require("events");
// create new event emitter
let eventEmitter = new events.EventEmitter();

// create 'greet' and 'exists' events and attach listener functions
eventEmitter.on("greet", handleGreet);
eventEmitter.on("exists", handleExists);

// function to be called when 'greet' event is emitted
function handleGreet() {
  // print message out to console
  console.log("Hello, world!");
  console.log("Please wait another second...");

  // emit the 'exists' event after 1 second
  setTimeout(() => {
    eventEmitter.emit("exists");
  }, 1000);
}

// function to be called when 'exists' event is emitted
function handleExists() {
  // print message out to console
  console.log("Where do we go from here?");
}

// emit the 'greet' event after 1 second
setTimeout(() => {
  eventEmitter.emit("greet");
}, 1000);

// initial ouput
console.log("Loading into existance. Please wait 1 second...");
