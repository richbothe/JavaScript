// Loops
console.log('*** LOOPS ***');

// The "for" loop
console.log("* Using the 'for' statement *")
var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}

// Iterate over an array and print out all of its members
console.log("* Using the 'for' statement to iterate over an array and all of it's members *")
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

// The "while" statement is a simplied version of "for" which checks if an expression evaluates to 'true' and runs as long as it says 'true'.
console.log("* Using the 'while' statement *")
var i = 3;
while (i > 0) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

// Break and continue statements
// The "break" statement allows to stop the execution of a loop.
console.log("* Using the 'break' statemet *")
var i = 3;
while (true) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0) {
        break;
    }
}

// The "continue" statement skips the rest of the loop and jumps back to the beginning of the loop.
console.log("* Using 'continue' statement *");
for (var i = 0; i < 10; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        // if we got here, then 'i' is odd
        console.log(i + " is an odd number.")
    }
}