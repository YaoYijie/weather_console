const request = require('request');
const argv = require('yargs').argv;

let apiKey = '1ca9c25649f0dff47936746b0d3ad416';
let city = argv.c || 'hangzhou';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// console.log(url);
request(url, function(err, response, body) {
  if (err) {
    console.log('error: ', err);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log('body: ', message);
  }
});
