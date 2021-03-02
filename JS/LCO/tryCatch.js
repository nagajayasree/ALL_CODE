const convertToRs = (dollar) => {
  if(typeof dollar === 'number'){
        return dollar * 75;
    }
    else{
        throw Error('not a number');
    }
}

// let result = convertToRs('five');
// console.log(result);

try {
    let result = convertToRs('five');
    console.log(result);
} catch (error) {
    console.log(error);
}

console.log("it will not run if program crashes");