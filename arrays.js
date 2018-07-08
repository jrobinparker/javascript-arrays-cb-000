var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [1]
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1]
  array.unshift(element)
  return array
}

function addElementToEndOfArray(myArray, newItem) {
  myArray = [1]
  newArray = [...myArray, newItem]
  return newArray
}

function destructivelyAddElementToEndOfArray(myArray, newItem) {
  myArray = [1]
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