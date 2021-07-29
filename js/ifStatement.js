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
var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar) {
    console.log('foo is smaller than bar AND moo is larger than bar');
}

if (foo < bar || moo > bar) {
    console.log('foo is smaller than bar OR moo is larger than bar')
}

// The 'not' operator
var notTrue = false;
if (!notTrue) {
    console.log('Not not true is true!');
}

// The 'switch' statement
// Used to select between more than two different options, and to run the same code for more than one option.
let rank = 'Commander';
switch(rank) {
    case "Private":
    case "Sergant":
        console.log('You are not authorized');
        break; // Needed to avoid the switch from executing the next code block.
    case "Commander":
        console.log('Hello commmander!');
        break;
    case "Captain":
        console.log('Hello captain!');
        break;
    default: // default is used what to do if an unknown rank was evaluated.
        console.log("I don't know what your rank is");
}