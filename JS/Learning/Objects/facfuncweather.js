function weatherUpdate(location,isCloudy){
    return{
        location,
        isCloudy,
        rain(){
            if(isCloudy === true){
                console.log("it will rain");
            }
            else{
                console.log("it will not rain");
            }
        }
    };
}

const weather = weatherUpdate();
console.log(weather);

const weather2 = weatherUpdate('hyd',false);
console.log(weather2);

const weather3 = weatherUpdate('hnk',true);
console.log(weather3);
