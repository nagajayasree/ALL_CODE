//program to check whether it is leap year or not.

function checkYear(year){
    if((year % 4 == 0 && year % 100 != 0)|| year % 400 == 0){
        console.log("leap year");
    }
    else 
    console.log("not a leap year");
}

checkYear(1900);
checkYear(1904);
checkYear(2010);
checkYear(2016);

let isLeap = (year) => year % 4 === 0;

console.log(isLeap(2019));
console.log(isLeap(2020));