const request = require('request');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/forecast');
const address = process.argv[2];

if (!address) {
  console.log('Please provide the address!');
} else {
  /****Address->Lat/Long -> weather** */
  geocode(address, (error, {latitude,longitude,locations}) => {

    if (error && error === undefined) {
      return console.log('error is', error);
    } else {
      const location = locations;
      getWeather(latitude, longitude, (error, {temp,rain,summary}) => {
        if (error && error === undefined) {
          return console.log('Error: unable to find weather');
        } else {
          console.log('It is currently', temp, ' degree out. There is a ',rain, ' % chance of rain.');
          console.log('Weather summary:', summary, ' Location:',locations);
        }
      });
      // console.log('Data is: lat:',data.latitude,' Long:',data.longitude,' Location:',data.location);
    }
  });
}
