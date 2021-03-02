/*
Mark and John are trying to calculate and compare their BMI.
Formula: BMI = mass/(height*height);
(mass in kd and height in meter).
*/


// let markMass = 65;//kg
// let markHeight = 1.9;//meter
// let johnMass = 70;
// let johnHeight = 1.6;

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let markHigherThanJohn = markBMI > johnBMI;

// console.log(markBMI.toFixed(2));
// console.log(johnBMI.toFixed(2));
// console.log("Is Marks's BMI higher than John's BMI?" + ' ' +markHigherThanJohn);


//using objects
let john = {
    name: 'John',
    mass: 70,
    height: 1.6,
    calcBMI: function(){
        return this.bmi = this.mass/(this.height*this.height);
    } 
}

let mark = {
    name: 'Mark',
    mass: 60,
    height: 1.8,
    calcBMI: function(){
        return this.bmi = this.mass/(this.height*this.height);
    } 
}

john.calcBMI();
mark.calcBMI();
console.log(john);
console.log(mark);
// console.log(john.calcBMI());
// console.log(mark.calcBMI());