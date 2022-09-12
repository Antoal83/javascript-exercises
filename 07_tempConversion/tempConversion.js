const ftoc = function(farenheitTemp) {

  let temperatureBeforeRounded = (farenheitTemp -32) * 5/9 ;

  return Math.round(temperatureBeforeRounded * 10) /10;
};

const ctof = function(celsiusTemp) {
  let temperatureBeforeRounded  = (celsiusTemp* 9/5) + 32
  return Math.round(temperatureBeforeRounded * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
