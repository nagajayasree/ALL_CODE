const numbers = [1,2,3,4];
const output = argSum(numbers);
console.log(output);

function argSum(numbers){
    array = 0;
    for(let n of numbers){
        array += n;
    }
    return array;
}
