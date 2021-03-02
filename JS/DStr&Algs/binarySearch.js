let arr = [10,14,25,31,37,42,48];
//let n = arr.length; length of arr
//ele -> element to be searched.

// console.log(low);
// console.log(high);
// console.log(mid);

function binarySearch(array,ele){
    let low = 0,high = array.length-1;
    let mid = low+(high-low)/2;
    if(array[mid] > ele){
        high = mid - 1;
    }
    if(array[mid] < ele){
        low = mid + 1;
    }
    if(array[mid] == ele){
        return "element found at position " + mid;
    }
}

console.log(binarySearch(arr,10));