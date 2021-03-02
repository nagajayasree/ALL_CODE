leapYear(2020);

function leapYear(year){
    if(year % 400 == 0 ? year % 100 == 0 : year % 4 == 0){
        console.log('leap year');
    }
    else{
        console.log('not a leap year');
    } 
}

