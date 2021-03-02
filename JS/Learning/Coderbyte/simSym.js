const input = '=+j+=';
let output = simSym(input);
console.log(output);
//let string = ('='+input+'=');

function simSym(string){
   let result = ('='+string+'=').match(/([^+][/a-z/])|([/a-z/][^+])/gi)===null;
   return result;
}