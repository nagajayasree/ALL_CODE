//program to replace 1st digit in a string with '$' character.

let replaceFirstDigit = (str) => str.replace(/[0-9]/,"$");

console.log(replaceFirstDigit("jaya04"));
console.log(replaceFirstDigit("123abc"));
console.log(replaceFirstDigit("opp0"));