const caesar = function(string, shift) {
    const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H",
                        "I", "J", "K", "L", "M", "N", "O", "P", "Q",
                        "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
    const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", 
                        "i", "j", "k", "l", "m", "n", "o", "p", "q",
                        "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let array = Array.from(string)
    let newArray = []
        for (i = 0; i < array.length; i++) {
            if (!upperAlphabet.includes(array[i]) && !lowerAlphabet.includes(array[i])) {
                newArray.push(array[i]);
            }
            else if (array[i] === array[i].toUpperCase()) {
                index = upperAlphabet.indexOf(array[i]);
                index += shift;
                if (index > 25) {
                    index = index % 26;
                }
                else if (index < 0) {
                    index = 26 + index;

                }
                newArray.push(upperAlphabet[index])
            }
            else if (array[i] === array[i].toLowerCase()) {
                index = lowerAlphabet.indexOf(array[i]);
                index += shift;
                if (index > 25) {
                    index = index % 26;
                }
                else if (index < 0) {
                    index = 26 + index;
                }
                newArray.push(lowerAlphabet[index])
            }
        }
    console.log(newArray.join(""))
    return newArray.join("");

};

caesar("A", 75)

// Do not edit below this line
module.exports = caesar;
