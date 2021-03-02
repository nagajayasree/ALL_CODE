//function to reverse a string

const str = 'hello';
let output = strReverse('hello world');
console.log(output);

function strReverse(str){
    let a = '';
    for(let i = str.length-1;i >= 0 ;i--){
        a += str[i];
    }
    return a;
}
