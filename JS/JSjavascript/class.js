class User{
    constructor(username,password,loggedIn){
        this.username = username;
        this._password = password;
        this.loggedIn = loggedIn;
    }
    
    set password(pwd){this._password = pwd};
    get password(){
        return "*".repeat(this._password.length);
    }

    login(){
        if(this.username === 'jaya' && this.password === 'vimal'){
            this.loggedIn = true;
            console.log(this.loggedIn);
        }
        else{
            this.loggedIn = false;
            console.log(this.loggedIn);
        }
    }

    show(){
        console.log(`Username: ${this.username}`);
        console.log(`Password : ${this.password}`);
        console.log(`LoggedIn : ${this.loggedIn}`)
    }

    static getLoginUrl(){
        return 'http://localhost/login';
    }
};
    
const user1 = new User('jaya','vimal',true);
console.log(user1);
user1.login();
user1.show();
User.getLoginUrl();