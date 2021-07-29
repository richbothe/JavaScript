// ARRAYS

var emptyArray = [], // Empty array
    myArray = [1, 2, 3, 4],             // brackets notation
    sameArray = new Array(1, 2, 3, 4);  // array object notation

console.log(myArray[1]);  // Addressing, uses zero-based indices (index).

var myArray2 = ["string", 10, {}];
console.log(myArray2);

// Push and pop
var myStack = [];
myStack.push('Stack 1'); // Pushing vairables to the array
myStack.push('Stack 2');
myStack.push('Stack 3');
myStack.push('Stack 4');

console.log('Push and pop')
console.log('Popped: ' + myStack.pop()); // Removes the last item of the array
console.log(myStack);

// Shift and unshift
var myQueue = [];
myQueue.push(1); // Adds to the end of the array
myQueue.push(2);
myQueue.push(3);
myQueue.unshift(6); // Adds to the beginning of the array
myQueue.pop(3); // Removed item 3 of the array

console.log('Shift and unshift')
console.log(myQueue);
console.log(myQueue.shift()); // 6
console.log(myQueue.shift()); // 1
console.log(myQueue.shift()); // 2

// Splice
var myArrayToSplice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArrayToSplice.splice(2, 7);

console.log('Using splice')
console.log(splice);
console.log(myArrayToSplice);