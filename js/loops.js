// Loops
console.log('*** LOOPS ***');

// The "for" loop
var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}
// Shorter notation
for (p = 0; p < 10; p++) {
    console.log(p);
}

// Iterate over an array
var myArray = ["A", "B", "C"];
for (i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}