const ftoc = function(temp) {
    result = ((temp - 32) * (5/9));
    result = Math.round(result * 10) / 10;
    return result;
}

const ctof = function(temp) {
    result = ((temp * (9/5)) + 32);
    result = Math.round(result * 10) / 10;
    return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
