const repeatString = function(string, num) {
    let x = "";
    if (num < 0) {
        return "ERROR";
    }
    else {
        for (i = 0; i < num; i++) {
            x = x.concat(string);
        };
        return x;
    }
};

// Do not edit below this line
module.exports = repeatString;
