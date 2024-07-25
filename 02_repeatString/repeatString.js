const repeatString = function (myString, nRepetitions) {
  if (nRepetitions >= 0) {
    return myString.repeat(nRepetitions);
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
