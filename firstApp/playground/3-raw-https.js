const http = require('https');
const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/pune%20india.json?access_token=pk.eyJ1IjoicHJhbW9ka2hhcmFkZSIsImEiOiJjamtkbXMyajczOW53M3BwYTV1d2s2NGd0In0.GeH8wry8207uwlTJe_SkTw';
const request = http.request(url, (response)=>{
    let data='';

    response.on('data',(chunk)=>{
        data = data + chunk.toString();
        console.log(data);
    });
    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    });

});
request.on('error',(error)=>{
    console.log('An error:',error);
});
request.end();