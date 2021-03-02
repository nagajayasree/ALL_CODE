function Weather(location,isCloudy){
    this.location = location;
    this.isCloudy = isCloudy;
    this.rain = function(){
        if(isCloudy == true){
            console.log("it will rain");
        }
        else{
            console.log("it will not rain");
        }
    }
}

const weather = new Weather('hyd',false);
console.log(weather);

const weather2 = new Weather('wrngl',true);
console.log(weather2);