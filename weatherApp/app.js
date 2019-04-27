const request = require('request');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/forecast');
/****Address->Lat/Long -> weather** */


geocode('pune',(error,data)=>{
  
  if(error &&  error===undefined){
    console.log('error is',error);
  }else{
    const location = data.locations;
    getWeather(data.latitude,data.longitude,(error,data)=>{
      if(error && error===undefined){
         console.log('Error: unable to find weather');
      }else{
        console.log('It is currently',data.temp,' degree out. There is a ',data.rain,' % chance of rain.');
      console.log('Weather summary:',data.summary,' Location:',location);
      }
    });
   // console.log('Data is: lat:',data.latitude,' Long:',data.longitude,' Location:',data.location);
  }
});

// const url = 'https://api.darksky.net/forecast/886527ebb03683c89fca0634ee21c6d7/18.5348336,73.8477759?units=si';
// request({
//     url:url,
//     json:true
//   },(error,response)=>{
//     if(error){
//       console.log('Unable to connect to weather service');
//     }else if(response.body.error){
//       console.log('unable to search location');
//     }
//     else{
//       const data = response.body;
//       console.log('It is currently',data.currently.temperature,' degree out. There is a ',data.currently.precipProbability,' % chance of rain.');
//       console.log(response.body.daily.data[0].summary);
//     }
//   });

//   const getWeather = (lat,long,(error,data)=>{

//   });