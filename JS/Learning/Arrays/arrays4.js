//mapping an array
const numbers = [1,2,3,-4];

const filtered = numbers.filter(n => n > 0);
console.log(filtered);

const items = filtered.map(n => '<li>'+ n +'</li>');
console.log(items);

const html = '<ul>'+items.join(' ')+'</ul>';
console.log(html);

const array = [1,2,-3,3,4];
const filter = array.filter(n => n > 0);
const item = filter.map(n => {
    const obj = {value : n};
    return obj;
});
console.log(item);

//also can be written as
const items1 = array
.filter(n => n > 0)
.map(n => ({value : n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value);
console.log(items1);

//reducing an array
const nums = [1,2,2];

let sum1 = 0;
for(let n of nums)
sum1 += n;
console.log(sum1);//method generally used to calculate sum

const sum = nums.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0);
console.log(sum);

const sum2 = nums.reduce((accumulator,currentValue) => accumulator + currentValue);
console.log(sum2);