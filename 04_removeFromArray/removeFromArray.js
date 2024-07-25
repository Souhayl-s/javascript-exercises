const removeFromArray = function(currentArray,...removalList) {
  const predicate = (value) => !removalList.includes(value);
  return currentArray.filter(predicate);
};

// Do not edit below this line
module.exports = removeFromArray;



