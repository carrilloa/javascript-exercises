const fibonacci = function(number) {
    let nOne = 0;
    let nTwo = 1;
    let nThree = 1;
    if (number < 0) {
        return "OOPS";
    }
    for (i = 0; i < number - 1; i++) {
        nThree = nOne + nTwo;
        nOne = nTwo;
        nTwo = nThree;
    }
    return nThree;

};

// Do not edit below this line
module.exports = fibonacci;


// function (n)
// for n times, 
// calculate the sequence up to that number
// so create a variable that is set to zero
// then another that is set to one
// the third is the result of those two
// add to array
// then reset first and second variable to be second and third
// and recalculate the third variable. 