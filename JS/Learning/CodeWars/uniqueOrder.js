let input = 'aaffgggbbjj';
uniqueOrder(input);

function uniqueOrder(input){
    let a = Array.from(input);
    for(let i = 0;i < a.length-1;i++){
        if(a[i] == a[i++]){
            console.log(a[i]);
        }
    }
}
