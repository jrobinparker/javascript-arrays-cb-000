var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var array = [1]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

var array = [1]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

var myArray = [1]

function addElementToEndOfArray(myArray, newItem) {
  newArray = [...myArray, newItem]
  return newArray
}

var myArray = [1]

function destructivelyAddElementToEndOfArray(myArray, newItem) {
  myArray.push(newItem)
  return myArray
}

var myArray = [1, 2, 3, 4, 5]

function accessElementInArray(myArray, index) {
  return myArray[index]
}

var myArray = [1, 2, 3]

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

var array = [1, 2, 3, 4, 5]

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

var array = [1, 2, 3, 4, 5]

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

var array = [1, 2, 3]

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}