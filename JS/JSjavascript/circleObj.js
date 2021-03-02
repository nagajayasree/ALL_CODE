function Circle(radius){
    this.radius = radius,
    this.area = function(){
        return 22/7 * radius * radius;
    }
};

let circle = new Circle(1);

console.log(circle.radius);
console.log(circle.area());



//mosh code
// let cir = {
//     radius : 1,
//     get area(){
//         return Math.PI * this.radius * this.radius; 
//     }
// };

// console.log(cir.area);