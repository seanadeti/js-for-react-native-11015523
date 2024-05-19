STUDENT ID: 11015523

Task 1: processArray Function
In this task, the goal is to create a JavaScript function named processArray that processes an array of numbers by modifying 
each element based on whether it is even or odd. The function takes an array of numbers as an argument and returns a new 
array where each even number is squared (i.e., multiplied by itself) and each odd number is tripled (i.e., multiplied by three). 
This transformation helps in creating a modified dataset that can be used for further processing. 
For example, given the input array [1, 2, 3, 4], the function would return [3, 4, 9, 16], because 1 (odd) becomes 3, 2 (even) becomes 4, 3 (odd) becomes 9, 
and 4 (even) becomes 16.

Task 2: formatArrayStrings Function
The second task involves creating another function named formatArrayStrings which formats an array of strings based on a corresponding array of numbers 
that have been processed by the processArray function from Task 1. This function takes two arrays as arguments: one array of strings and one array of processed numbers. 
It modifies each string in the array according to the corresponding number in the processed array. Specifically, if the corresponding number is even, 
the entire string is capitalized. If the number is odd, the string is converted to lowercase. This functionality allows the creation of a visually distinct dataset 
where the formatting of strings conveys information about the numbers they are associated with. 
For instance, given the arrays ["apple", "Banana", "CHERRY", "grape"] and [3, 4, 9, 16], the function would return ["apple", "BANANA", "cherry", "GRAPE"].

Task 3: createUserProfiles Function
The third task is to create a function named createUserProfiles in a separate file called userInfo.js. 
This function generates user profile objects from two arrays: one containing original names and the other containing modified names from Task 2. 
The function returns an array of objects, where each object contains three properties: originalName (the name from the first array), modifiedName (the name from the second array), 
and id (an auto-incremented identifier starting from 1). This task builds on the results of the previous tasks to create a structured dataset that can be used in applications 
requiring user profile information. 
For example, given the names ["John", "Alice", "Bob"] and modified names ["john", "ALICE", "bob"], 
the function would return an array of objects: [{ originalName: 'John', modifiedName: 'john', id: 1 }, { originalName: 'Alice', modifiedName: 'ALICE', id: 2 }, { originalName: 'Bob', modifiedName: 'bob', id: 3 }].
