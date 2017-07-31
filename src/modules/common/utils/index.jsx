function convertObjToArray(obj) {
    return Object.keys(obj).map(el => obj[el]);
}

function getFirstArrayElement(arr) {
    return arr[0];
}


export {
    convertObjToArray,
    getFirstArrayElement
}