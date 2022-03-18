const reverseString = function(string) {
    let x = string;
    let splitString = string.split("");
    x = splitString.reverse();
    x = x.join("");
    return x;
};

// Do not edit below this line
module.exports = reverseString;
