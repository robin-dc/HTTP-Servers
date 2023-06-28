// String.split - to split a string into an array by a given delimiter
// String.replace - to replace the substrings in a string with another substring
// Use str.replace(/\+/g, " ") to replace all + symbols in the string with a space
// Array.map - to convert each element in the array to a new element
// Array.reduce - to convert an array into an object (TRICKY to use so don't use this unless you have a good idea of how to do this)
// decodeURIComponent(str) - decodes a given string from Percent Encoding

function firstStep(input) {
  // Your code here
  return input.split("&")
}

function secondStep(input) {
  // Your code here
  return input.map(item => item.split("="))
}

function thirdStep(input) {
  // Your code here
  return input.map(array => array.map(item => item.replace(/\+/g, " ") ))
}

function fourthStep(input) {
  // Your code here
  return input.map(array => array.map(item => decodeURIComponent(item) ))
}

function fifthStep(input) {
  // Your code here
  // Array.reduce - to convert an array into an object (TRICKY to use so don't use this unless you have a good idea of how to do this)
  // [
  //   ["username", "azure green"],
  //   ["password", "password!"],
  // ]
  // {
  //   username: "azure green",
  //   password: "password!",
  // }
  return input.reduce((accum, item) => {
    accum[item[0]] = item[1]
    return accum
  }, {})
}

function parseBody(str) {
  // Your code here
  const makeArray = firstStep(str)
  const convertTo2DArray = secondStep(makeArray)
  const convertToSpaces = thirdStep(convertTo2DArray)
  const decodeSymbols = fourthStep(convertToSpaces)
  const convertToObject = fifthStep(decodeSymbols)
  return convertToObject
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
