const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Arrays must be of the same length");
    }

    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example for userInfo.js
const names = ["John", "Alice", "Bob"];
const numbers = [1, 2, 3];
const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);


