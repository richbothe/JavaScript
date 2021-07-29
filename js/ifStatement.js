// THE 'if'' STATEMENT

// Equality operator 
// '==' evaluates whether two variables are equal.
// '===' does strict comparison, meaning it will be true only if the two things being compared are the same type as well as the same content.
var myNumber = 42;
if (myNumber == 42) {
    console.log(myNumber + ' => evaluated using "==" to compare if variables are equal');
}

if (myNumber === 42) {
    console.log(myNumber + ' => evaluated using strict comparison (===)');
}

// Inequality operators
var one = 1;
var two = 2;
var three = 3;

if (one < two && three > two) {
    console.log('One is smaller than two AND three is larger than two');
}

if (one < two || three > two) {
    console.log('One is smaller than two OR three is larger than two')
}

// The 'not' operator
var notTrue = false;
if (!notTrue) {
    console.log('Not not true is true!');
}

// The 'switch' statement
// Used to select between more than two different options, and to run the same code for more than one option.
let rank = 'Boss';
switch(rank) {
    case "Newbie":
    case "Lead":
        console.log(rank + ', you are not authorized');
        break; // Needed to avoid the switch from executing the next code block.
    case "Boss":
    case "Supervisor":
        console.log('Hello ' + rank + '!');
        break;
    default: // default is used when an unknown rank is evaluated.
        console.log("I don't know what your rank is");
        break;
}