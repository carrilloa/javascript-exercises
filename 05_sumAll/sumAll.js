const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR"
    }
    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR"
    }
    for (i = firstNumber; i < secondNumber + 1; i++) {
        sum += i;
    }
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
