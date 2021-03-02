let arr = [21,54,69,46,37,61,92,85,10,52];

function linearsearch(array,element){
    for(let i=0;i<=array.length-1;i++){
        if(array[i] == element){
            return "element found at position " + [i+1];
        }
    }
}

console.log(linearsearch(arr,92));