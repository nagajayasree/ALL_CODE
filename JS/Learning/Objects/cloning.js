const circle = {
    radius : 1,
    draw() {
        console.log("draw");
    }
};


const another = {};
for(let key in circle)
another[key] = circle[key];

const another2 = Object.assign({},circle);

const another3 = Object.assign({color:"yellow"},circle);

console.log(another);
console.log(another2);
console.log(another3);