const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let toAdd = 0;
    let until = 0;
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    else if (typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") {
        return "ERROR"
    }
    else if (firstNumber > secondNumber) {
        toAdd = secondNumber;
        until = firstNumber;
    }
    else if (secondNumber > firstNumber) {
        toAdd = firstNumber;
        until = secondNumber;
    }
    for (i = 0; i < until; i++) {
        sum += toAdd;
        toAdd++;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
