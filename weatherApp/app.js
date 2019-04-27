const request = require('request');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/forecast');
const address = process.argv[2];

if (!address) {
  console.log('Please provide the address!');
} else {
  /****Address->Lat/Long -> weather** */
  geocode(address, (error, data) => {

    if (error && error === undefined) {
      return console.log('error is', error);
    } else {
      const location = data.locations;
      getWeather(data.latitude, data.longitude, (error, dataweather) => {
        if (error && error === undefined) {
          return console.log('Error: unable to find weather');
        } else {
          console.log('It is currently', dataweather.temp, ' degree out. There is a ', dataweather.rain, ' % chance of rain.');
          console.log('Weather summary:', dataweather.summary, ' Location:', data.locations);
        }
      });
      // console.log('Data is: lat:',data.latitude,' Long:',data.longitude,' Location:',data.location);
    }
  });
}
