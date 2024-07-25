const repeatString = function (myString, nRepetitions) {
  if (nRepetitions >= 0) {
    let sumString = "";
    for (let repetition = 0; repetition < nRepetitions; ++repetition) {
      sumString += myString;
    }
    return sumString;
  }
  return "ERROR" ;
};

// Do not edit below this line
module.exports = repeatString;
