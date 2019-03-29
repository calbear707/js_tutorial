(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//Export Phrase object so that it can be used in other files
module.exports = Phrase;

//Adds 'reverse' method to all strings, not just arrays
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

/*/Adds 'leters' method to all strings
String.prototype.letters = function() {
  return
}
*/

//Defining a Phrase object
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  //Returns the letters in the content.
  this.letters = function letters() {
  return (this.content.match(/[a-z]/gi) || []).join("");
}

  //Returns true if palindrome, false if not palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }
}

},{}],2:[function(require,module,exports){
//using exported Phrase object, creating an alert (#2) that should read true

let Phrase = require("glarkin-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if(phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`)
}

},{"glarkin-palindrome":1}]},{},[2]);
