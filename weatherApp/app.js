const request = require('request');
/****Address->Lat/Long -> weather** */
const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_token=pk.eyJ1IjoicHJhbW9ka2hhcmFkZSIsImEiOiJjamtkbXMyajczOW53M3BwYTV1d2s2NGd0In0.GeH8wry8207uwlTJe_SkTw&limit=1';
request({
  url:geocodeurl,
  json:true
},(error,response)=>{
  console.log('RES: ',response.body.features.length);
  if(error){
    console.log('Unable to connect map service!');
  }else if(response.body.features.length===0){
    console.log('unable to search , try another term');
  }else{
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log('Lat: ',latitude,' Long:',longitude);
  }
});
const url = 'https://api.darksky.net/forecast/886527ebb03683c89fca0634ee21c6d7/18.5348336,73.8477759?units=si';

request({
    url:url,
    json:true
  },(error,response)=>{
    if(error){
      console.log('Unable to connect to weather service');
    }else if(response.body.error){
      console.log('unable to search location');
    }
    else{
      const data = response.body;
      console.log('It is currently',data.currently.temperature,' degree out. There is a ',data.currently.precipProbability,' % chance of rain.');
      console.log(response.body.daily.data[0].summary);
    }
  });