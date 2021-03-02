//my soln
let result = numCheck(75,25);
console.log(result);

function numCheck(a,b){
    if(a == 100||b == 100||a+b == 100){
        return true;
    }
    else{
        return false;
    }
};


// let numCheck = (a,b) => a == 100 || b == 100 || (a+b) == 100;
// console.log(numCheck(100,0));
// console.log(numCheck(0,100));
// console.log(numCheck(50,50));

