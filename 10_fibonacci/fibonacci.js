const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    for (i = 1; i < number; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;

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