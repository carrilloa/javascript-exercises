const getTheTitles = function(books) {
    arrayOne = Array.from(books);
    mapOne = arrayOne.map(({title}) => title);
    return mapOne;
};

// Do not edit below this line
module.exports = getTheTitles;
