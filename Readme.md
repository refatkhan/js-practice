🔢 Sorting Numbers & Strings in JavaScript

JavaScript’s default sort() method does not always behave the way developers expect.
This note explains how number sorting and string sorting work, and how to correctly sort both using custom compare functions.

📌 1. Sorting Numbers in JavaScript

By default, sort() treats numbers as strings, meaning:

1, 10, 2, 20

This results in incorrect ordering for numeric data.

✅ Correct Way (Ascending Order)

Use a custom compare function:

// Number Sorting (Ascending)
const numbers = [40, 50, 26, 4, 6, 10];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);
// Output: [4, 6, 10, 26, 40, 50]

Explanation:

a - b → sorts in ascending order

b - a → would sort in descending order

📌 2. Sorting Strings in JavaScript

When using sort() with strings:

Uppercase letters come before lowercase letters.

Result may look inconsistent:

const fruits = ["banana", "apple", "Cherry", "Date"];
fruits.sort();

console.log(fruits);
// Output: ["Cherry", "Date", "apple", "banana"]

✅ Correct Way to Sort Strings Alphabetically (Case-Insensitive)

Use localeCompare():

const fruits = ["banana", "apple", "Cherry", "Date"];

fruits.sort((a, b) => a.localeCompare(b));

console.log(fruits);
// Output: ["apple", "banana", "Cherry", "Date"]

localeCompare() ensures alphabetic sorting while ignoring case differences.
