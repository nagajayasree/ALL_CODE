//initializing address with factory function

function createAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    };
}

let address = createAddress('a','b',123456);
console.log(address);

//using constructor function

function Address(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address1 = new Address('x','y',675887);
console.log(address1);
