const request = require('request');

const url = 'https://api.darksky.net/forecast/886527ebb03683c89fca0634ee21c6d7/18.5348336,73.8477759';

request({url:url},(error,response)=>{
    const data = JSON.parse(response.body);
    console.log(data.currently);
});