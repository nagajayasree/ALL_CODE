let numbers = ['2','4','3','6','9'];
let output = [];
let result = maxProduct(numbers);
//console.log(result);

function maxProduct(numbers){
    for(let i = 0;i < numbers.length-1;i++){
        let num = numbers[i] * numbers[i+1];
        output.push(num);
    }
    console.log(output);
    let max = Math.max.apply(null,output);
    console.log(max);
    let m = Math.max.apply(output);
    console.log(m);
    let mx = Math.max(output);
    console.log(mx);
}
