function processArray(numbers) {
    const myArray = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            myArray.push(numbers[i] * numbers[i]);
        } else {
            myArray.push(numbers[i] * 3);
        }
    }

    return myArray;
}


function formatArrayStrings(strings, numbers) {

    if (strings.length !== numbers.length) {
        throw new Error("Arrays must be of the same length");
    }

    for (let i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
            strings[i] = strings[i].toUpperCase();
        } else {
            strings[i] = strings[i].toLowerCase();
        }
    }
    return strings;
}

module.exports = {processArray, formatArrayStrings};