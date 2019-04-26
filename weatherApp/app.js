const request = require('request');

const url = 'https://api.darksky.net/forecast/886527ebb03683c89fca0634ee21c6d7/18.5348336,73.8477759?units=si';

request({
    url:url,
    json:true
  },(error,response)=>{
    const data = response.body;
    console.log('It is currently',data.currently.temperature,' degree out. There is a ',data.currently.precipProbability,' % chance of rain.');
    console.log(response.body.daily.data[0].summary);
  });