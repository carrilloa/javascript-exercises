const add = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const sum = function(array) {
  return array.reduce((
    (acc, curr) => acc + curr
  ), 0)
};

const multiply = function(array) {
    return array.reduce(
      (acc, curr) => acc * curr 
    )
};

const power = function(numberOne, numberTwo) {
  return Math.pow(numberOne, numberTwo)
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
