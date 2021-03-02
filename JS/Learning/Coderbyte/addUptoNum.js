function addNum(n){
    let sum = 0;
    while(n >= 0){
        sum += n;
        n--;
    }    
    console.log(sum);
}

addNum(10);