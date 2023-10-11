const convertToCelsius = function(val) {
  return Math.round(((val-32) * (5/9))*10)/10;
};

const convertToFahrenheit = function(val) {
  return Math.round(((val * (9/5) + 32)) * 10)/10;
};

console.log(convertToCelsius(100)) // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
