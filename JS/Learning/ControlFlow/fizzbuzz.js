//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by both 3 and 5 => fizzbuzz
//not divisible by 5 or 3 => input
//not a number => 'not a number'

let output = fizzBuzz('false');
console.log(output);

function fizzBuzz(input){
    if(input % 3 === 0 && input % 5 === 0)
    return 'fizzbuzz';

    if(input % 3 === 0)
    return 'fizz';

    if(input % 5 === 0)
    return 'buzz';

    if(typeof input !== 'number')
    return NaN;

    return input;
}