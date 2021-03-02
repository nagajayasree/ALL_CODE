// let johnT1 = 89,johnT2 = 120,johnT3 = 103;
// let mikeT1 = 116,mikeT2 = 94,mikeT3 = 123;
// let maryT1 = 97,maryT2 = 134,maryT3 = 105;

let johnScoreAvg = (89+120+103)/3;
let mikeScoreAvg = (116+94+123)/3;
//let maryScoreAvg = (116+94+123)/3;
let maryScoreAvg = (97+134+105)/3;

if(johnScoreAvg > mikeScoreAvg && johnScoreAvg > maryScoreAvg){
    console.log(`John is winner with avg score ${johnScoreAvg},which is greater than Mike's avg score ${mikeScoreAvg} and Mary's avg score ${maryScoreAvg}`);
}else if(mikeScoreAvg > johnScoreAvg && mikeScoreAvg > maryScoreAvg){
    console.log(`Mike is winner with avg score ${mikeScoreAvg},which is greater than John's avg score ${johnScoreAvg} and Mary's avg score ${maryScoreAvg}`);
}else if(maryScoreAvg > johnScoreAvg && maryScoreAvg > mikeScoreAvg){
    console.log(`Mary is winner with avg score ${maryScoreAvg},which is greater than John's avg score ${johnScoreAvg} and Mike's avg score ${mikeScoreAvg}`);
}else console.log('It is a draw');