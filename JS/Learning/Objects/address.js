//initializing object using object literals 
const address = {
    street : 'abc',
    city : 'xyz',
    zipcode : 112234
};

function showAddress(address){
    for(let key in address)
    console.log(key,address[key]);
}

showAddress();

