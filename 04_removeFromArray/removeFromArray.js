const removeFromArray = function(givenArray, ...toRemove) {
    for (let i = givenArray.length - 1; i >= 0; i--) {
        if (toRemove.includes(givenArray[i])) {
            givenArray.splice(i, 1);
        }
    }
    return givenArray;
}
// Do not edit below this line
module.exports = removeFromArray;