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
<h1>🧮 JavaScript Array Methods: map(), filter(), sort(), slice(), splice()</h1>

These are some of the most powerful and commonly used JavaScript array methods.
This documentation explains how each method works with clear examples, use cases, and output.

<hr/>
<h2>🔹 1. Array.map()</h2>
<em>Create a new array by applying a function to each element</em>

Does not modify the original array

Always returns a new array

Used for: transforming values, creating new structures

✅ Example: Multiply each element by 2
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num \* 2);

console.log(doubled);
// Output: [2, 4, 6, 8]

Example: Extract property from array of objects
const users = [
{ name: "Refat", age: 20 },
{ name: "Siam", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);
// ["Refat", "Siam"]

<h2>🔹 2. Array.filter()</h2>
<em>Create a new array by keeping only elements that match a condition</em>

Does not modify original array

Returns a filtered array

✅ Example: Keep only even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6]

Example: Filter objects
const products = [
{ name: "Laptop", price: 800 },
{ name: "Mouse", price: 20 },
{ name: "Keyboard", price: 50 }
];

const expensive = products.filter(p => p.price > 100);

console.log(expensive);
// [{ name: "Laptop", price: 800 }]

<h2>🔹 3. Array.sort()</h2>
<em>Sort elements alphabetically or numerically</em>

⚠️ Default sort converts values to strings, which causes unexpected outcomes.
Use compare functions for proper sorting.

✅ Example: Sort numbers (ascending)
const numbers = [40, 10, 3, 8, 50];
numbers.sort((a, b) => a - b);

console.log(numbers);
// [3, 8, 10, 40, 50]

Example: Sort strings alphabetically
const names = ["Siam", "refat", "Amin", "khan"];
names.sort((a, b) => a.localeCompare(b));

console.log(names);
// ["Amin", "khan", "refat", "Siam"]

<h2>🔹 4. Array.slice()</h2>
<em>Returns a portion of the array WITHOUT modifying the original array.</em>

Syntax:
slice(start, end) → end is not included

✅ Example: Get first 3 elements
const numbers = [10, 20, 30, 40, 50];
const firstThree = numbers.slice(0, 3);

console.log(firstThree);
// [10, 20, 30]

Example: Get last 2 elements
const numbers = [10, 20, 30, 40, 50];
const lastTwo = numbers.slice(-2);

console.log(lastTwo);
// [40, 50]

<h2>🔹 5. Array.splice()</h2>
<em>Add, remove, or replace elements in an array (modifies original array)</em>

Syntax:
splice(start, deleteCount, item1, item2, ...)

Modifies original array

Returns removed elements

✅ Example: Remove elements
const items = ["a", "b", "c", "d"];
const removed = items.splice(1, 2);

console.log(items);
// ["a", "d"]

console.log(removed);
// ["b", "c"]

Example: Insert elements (without removing)
const items = ["a", "b", "c"];
items.splice(1, 0, "x", "y");

console.log(items);
// ["a", "x", "y", "b", "c"]

Example: Replace elements
const items = ["a", "b", "c"];
items.splice(1, 1, "z");

console.log(items);
// ["a", "z", "c"]

<h2>📌 Final Summary Table</h2>
Method	Modifies Original?	Returns	Best for
map()	❌ No	new array	transforming values
filter()	❌ No	new array	keeping elements by condition
sort()	✔️ Yes	sorted array	ordering elements
slice()	❌ No	new array	copying a portion
splice()	✔️ Yes	removed elements	add/remove/replace items
