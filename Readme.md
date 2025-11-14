<h1 align="center">📚 JavaScript Array Methods — Master Guide</h1>
<p align="center">Complete documentation for sorting, flattening, removing duplicates, generating ranges, and checking array conditions.</p> <hr/>
<h2>🔢 Sorting Numbers & Strings in JavaScript</h2>

JavaScript’s default <code>sort()</code> method does not work as expected with numbers and uppercase/lowercase strings.
Here is the correct way to sort both types properly.

<h3>📌 1. Sorting Numbers</h3>

By default, numbers are compared as strings, which produces incorrect sorting:

1, 10, 2, 20

✅ Correct Way (Ascending Order)
const numbers = [40, 50, 26, 4, 6, 10];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);
// Output: [4, 6, 10, 26, 40, 50]

Explanation:

a - b → Ascending

b - a → Descending

<h3>📌 2. Sorting Strings</h3>

Default string sorting places uppercase before lowercase:

const fruits = ["banana", "apple", "Cherry", "Date"];
fruits.sort();

console.log(fruits);
// Output: ["Cherry", "Date", "apple", "banana"]

✅ Correct Way (Case-Insensitive)
const fruits = ["banana", "apple", "Cherry", "Date"];

fruits.sort((a, b) => a.localeCompare(b));

console.log(fruits);
// Output: ["apple", "banana", "Cherry", "Date"]

localeCompare() ensures proper alphabetical sorting.

<hr/>
<h2>🧩 Flattening Nested Arrays & Removing Duplicates</h2>

JavaScript provides <code>flat()</code> and <code>Set</code> to handle deeply nested arrays and remove duplicate values easily.

<h3>📌 1. Flattening Nested Arrays</h3>

Example nested array:

const arr = [1, 2, 3, [6, 7, 8, [10, 11, 12, [4, 6, 98, 4]]]];

🔹 1.1 Flatten Only One Level
const flatArr = arr.flat();

🔹 1.2 Flatten to a Specific Depth
const flatArr = arr.flat(2);

🔹 1.3 Fully Flatten (All Levels)
const flatArr = arr.flat(Infinity);
console.log(flatArr);

Output:

[1, 2, 3, 6, 7, 8, 10, 11, 12, 4, 6, 98, 4]

<h3>📌 2. Removing Duplicates</h3>

Example tag arrays:

const tagsFromPosts = [
["javascript", "react", "css"],
["node", "express"],
["css", "html", "react"]
];

✅ Flatten + Remove Duplicates
const filterTags = [...new Set(tagsFromPosts.flat())];
console.log(filterTags);

Output:

["javascript", "react", "css", "node", "express", "html"]

<h3>📌 Summary Table</h3>
Task	Method
Flatten one level	arr.flat()
Flatten specific depth	arr.flat(depth)
Fully flatten array	arr.flat(Infinity)
Remove duplicates	new Set(arr)
Flatten + unique	[...new Set(arr.flat())]
<hr/>
<h2>📘 JavaScript Array Utility Methods</h2>

Complete guide to <code>some()</code>, <code>includes()</code>, <code>Array.from()</code>, <code>fill()</code>, and custom range generation.

<h3>🔹 1. Array.some()</h3>

Checks if any element satisfies a condition.

Example: Even Number Check
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.some(num => num % 2 === 0));
// true

Example: No Match
const numbers2 = [1, 3, 5, 7];
console.log(numbers2.some(num => num % 2 === 0));
// false

Example: Role Permission Check
const currentUserRoles = ["user", "editor", "admin"];
const allowedRoles = ["admin", "manager"];

console.log(
currentUserRoles.some(role => allowedRoles.includes(role))
);
// true

<h3>🔹 2. Array.includes()</h3>
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false

<h3>🔹 3. Array.from()</h3>
Create empty array with length:
Array.from({ length: 5 });

Create & fill array:
Array.from({ length: 5 }).fill(0);
// [0, 0, 0, 0, 0]

Create array using mapping:
Array.from({ length: 5 }, (\_, i) => i + 1);
// [1, 2, 3, 4, 5]

<h3>🔹 4. fill()</h3>
const arr = [1, 2, 3, 4];
arr.fill(0);
// [0, 0, 0, 0]

Partial fill:

arr.fill(9, 1, 4);
// [1, 9, 9, 9, 5]

<h3>🔹 5. Range Generator</h3>
Basic Structure
const range = (start, stop, step) =>
  Array.from({ length: Math.ceil((stop - start) / step) });

Fully Working Range Generator
const range = (start, stop, step) =>
Array.from(
{ length: Math.ceil((stop - start) / step) },
(\_, i) => start + i \* step
);

console.log(range(0, 10, 2));
// [0, 2, 4, 6, 8]

<h2>📌 Final Summary Table</h2>
Method	Purpose	Returns
some()	Check if any element meets a condition	true / false
includes()	Check if a value exists	true / false
Array.from()	Create arrays dynamically	new array
fill()	Fill entire/partial array	modified array
Range function	Create number sequences	array
