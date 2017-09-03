/*
Converts object to array

Example:

var testObj = {
  a: 1,
  b: 2,
  c: 3
};

convertObjToArray(testObj) => [1, 2, 3]
*/
function convertObjToArray(obj) {
    return Object.keys(obj).map(el => obj[el]);
}

/*
Gets the first element of an array

Example:

let arr = [1, 2, 3];

getFirstArrayElement(arr) => 1
*/
function getFirstArrayElement(arr) {
    return arr[0];
}

/*
Converts Date Strings to Date Object

Example:

let dateStr = "Mon Sep 01 1980";

convertStringToDateObject(dateStr)) => Mon Sep 01 1980 00:00:00 GMT+0600 (Bangladesh Standard Time)
*/
function convertStringToDateObject(str) {
    return new Date(str);
}

export {
    convertObjToArray,
    getFirstArrayElement,
    convertStringToDateObject
}