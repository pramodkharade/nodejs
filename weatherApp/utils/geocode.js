const request = require('request');
/****Address->Lat/Long -> weather** */
const geocode = (address,callback)=>{
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhbW9ka2hhcmFkZSIsImEiOiJjamtkbXMyajczOW53M3BwYTV1d2s2NGd0In0.GeH8wry8207uwlTJe_SkTw&limit=1';
    request({
      url:geocodeurl,
      json:true
    },(error,response)=>{
        if(error){
          callback('Unable to connet to map service!',undefined);
        }else if(response.body.features.length===0){
          callback('Unable to search, try another term');
        }else{
           console.log('Location is:',response.body.features[0].place_name);
           callback(undefined,
            {
              latitude: response.body.features[0].center[1],
              longitude: response.body.features[0].center[0],
              locations:response.body.features[0].place_name,
            });
        }
    });
}

module.exports = geocode;