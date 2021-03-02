const marks = [60,70,90];

//1-59 - f
//60-69 - d
//70-79 - c
//80-89 - b
//90-100 - a
console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum = 0 ;
    for(let mark of marks)
       sum += mark;
    let average = sum / marks.length;

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}