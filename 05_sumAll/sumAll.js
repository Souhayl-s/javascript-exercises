const sumAll = function (lowerLimit, upperLimit) {
  let isInteger = Number.isInteger(lowerLimit) && Number.isInteger(upperLimit)
  let isPositive = lowerLimit >= 0 && upperLimit >= 0;
  if ( isInteger && isPositive) {
    if (lowerLimit > upperLimit) {
      [lowerLimit, upperLimit] = [upperLimit, lowerLimit]; // swap values
    }
    let sum = 0;
    for (let num = lowerLimit; num <= upperLimit; ++num) {
      sum += num;
    }
    return sum;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;

