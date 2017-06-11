function convertObjToArray(obj) {
    return Object.keys(obj).map(el => obj[el]);
}

export {
    convertObjToArray
}