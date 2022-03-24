const add = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const sum = function(array) {
  let sum = 0;
  for (i = array.length - 1; i >= 0; i--) {
    sum += array[i];
  }
	return sum;
};

const multiply = function(array) {
  let product = 1;
  for (i = array.length - 1; i >= 0; i--) {
    product *= array[i];
  }
	return product; 
};

const power = function(numberOne, numberTwo) {
	let answer = 1;
  for (i = 0; i < numberTwo; i++) {
    answer *= numberOne;
  }
  return answer;
};

const factorial = function(number) {
  let answer = 1;
  if (number == 0) {
    return 1;
  }
  for (i = 0; i < number;) {
    answer *= number;
    number--;
  }
	return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
