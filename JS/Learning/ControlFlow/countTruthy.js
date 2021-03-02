let array = [0,null,undefined,'',false,true,1];

function countTruthy(array){
   let count = 0;
   for (let value of array)
   if(value)
   count++;
   return count;
}

console.log(countTruthy(array));