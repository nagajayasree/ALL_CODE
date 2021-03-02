class person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    fullName(){
        return `${this.firstname} ${this.lastname} is my fullname`;
    }

    editName(newName){
        let myName = newName.split(' ');
        this.firstname = myName[0];
        this.lastname = myName[1];
    }

    middleName(middleName){
        let addMiddleName = middleName;
        return `${this.firstname} ${addMiddleName} ${this.lastname}`;
    }
}

let jaya = new person('naga','ramaka',24);
//console.log(jaya.fullName());
//console.log(jaya.middleName('jayasree'));
jaya.editName('jaya sree');
console.log(jaya);

