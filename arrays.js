var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [1]
  newArray = [element, ...array]
  return newArray
}

var array = [1]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(myArray, newItem) {
  myArray = [1]
  newArray = [...myArray, newItem]
  return newArray
}

var myArray = [1]

function destructivelyAddElementToEndOfArray(myArray, newItem) {
  myArray.push(newItem)
  return myArray
}

function accessElementInArray(myArray, index) {
  myArray = [1, 2, 3, 4, 5]
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray = [1, 2, 3]
  myArray.shift()
}