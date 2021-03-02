const weather = {
    location : "hyd",
    isCloudy : false,
    rain : function(){
        if(weather.isCloudy == true)
        {
            console.log('it will rain');
        }
        else{
            console.log('it will not rain');
        }
   }
};

weather.rain();

