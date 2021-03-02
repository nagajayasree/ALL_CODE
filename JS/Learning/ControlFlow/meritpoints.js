// merit points <= 70;  ok
// 5 -> 1 point
// Math.floor(1.5)
// 12 points -> suspended

checkSpeed(12);

function checkSpeed(speed) {
 const speedLimit = 70;
 const kmPerPoint = 5;

    if(speed < speedLimit)
    console.log('ok');
    else{
        const points = Math.floor(speed - speedLimit) / kmPerPoint;
        if (points >= 12)
        console.log("license suspended");
        else
        console.log('Points',points);
    }
}