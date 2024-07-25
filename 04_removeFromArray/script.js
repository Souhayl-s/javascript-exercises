// step 1 : eliminate all occurences of an element in an array --> (index for loop  ; filter)
// step 2 : access all arguments passed to a function



// filter
// define a function that returns a bool of (X != element to remove)

function removeFromArray(currentArray, ...excludedElements) {
  const predicate = (value) => !excludedElements.includes(value);
  return currentArray.filter(predicate);
}

console.log(array) ;
array = removeFromArray(array,1,2,5,4) ;
console.log(array) ;
