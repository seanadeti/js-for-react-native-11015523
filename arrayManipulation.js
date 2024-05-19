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

// Example
var inputArray = [1, 6, 3, 4, 5];
var resultArray = processArray(inputArray);
console.log(resultArray); 