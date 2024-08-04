const removeFromArray = function(myArray,...desiredElem) {
    return myArray.filter(value => !desiredElem.includes(value))
};
// Do not edit below this line
module.exports = removeFromArray;
