const palindromes = function (string) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
    ]
    let newString = string.toLowerCase();
    let forwardsArray = []
    let backwardsArray = []
    for (i = 0; i < newString.length; i++) {
        if (alphabet.includes(newString[i])) {
            forwardsArray.push(newString[i]);
            backwardsArray.push(newString[i]);
        }
    }
    backwardsArray.reverse()
    for (i = 0; i < forwardsArray.length; i++) {
        if (forwardsArray[i] == backwardsArray[i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
