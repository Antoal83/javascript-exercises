const removeFromArray = function(arrayReceived, ...numbersToDelete) {
    let forDeletion = numbersToDelete

let arr = arrayReceived

arr = arr.filter(item => !forDeletion.includes(item))
// !!! Read below about array.includes(...) support !!!

console.log(arr)
// [ 1, 4 ]

return arr; 

};

// Do not edit below this line
module.exports = removeFromArray;
