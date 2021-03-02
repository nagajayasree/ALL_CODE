//take 2 integers,a and b return true if 
//it is divided evenly,otherwise false

evenlyDivided(78,6);

function evenlyDivided(a,b){
    let c = a / b;
    let result = (c % 2 == 0) ? true : false;
    console.log(result);
}