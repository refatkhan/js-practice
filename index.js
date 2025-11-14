//number sorting
const numbers = [40, 50, 26, 4, 6, 10];
const sortNumbers = numbers.sort((a,b)=>a-b);
console.log(sortNumbers);
console.log(numbers)

//string 
const fruits = ["banana", 'apple', "Cherry", "Date"]
fruits.sort((a,b)=>a.localeCompare(b))
console.log(fruits)



const tagsFromPosts = [
    ["javascript", "react", "css"],
["node", "express"]];
