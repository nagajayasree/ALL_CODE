const  numbers = [1,2,3,4,3,2,2];
const count = countOccurences(numbers,3);
console.log(count);

function countOccurences(array,searchElement){
    let count =0;
    for(let element of array)
    if(!array.includes(searchElement) || searchElement < 0)
    return 0;
    else
    if(element === searchElement)
    count++;
    return count;
    
}