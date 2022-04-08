const snakeCase = function(string) {
    let newArray = Array.from(string).replace(/[^a-z]/g, "");
    let result = [];
    newArray.map(character => {
        if (character == " ")
        if (character !== character.toUpperCase()) {
            result.push(character)
        }
    
});

// Do not edit below this line
module.exports = snakeCase;
