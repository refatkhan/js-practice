//number sorting
const numbers = [40, 50, 26, 4, 6, 10];
const sortNumbers = numbers.sort((a,b)=>a-b);
//console.log(sortNumbers);
//console.log(numbers)

//string 
const fruits = ["banana", 'apple', "Cherry", "Date"]
fruits.sort((a,b)=>a.localeCompare(b))
//console.log(fruits)

//nested array flat 
const arr = [1,2,3,[6,7,8,[10,11,12,[4,6,98,4]]]]
//only one layer wii be changes
//const flatArr = arr.flat()
//if we want to specifically then we call give the depth of array layer
//const flatArr = arr.flat(2)

//now if we want to make total array into one then we use INfinity
const flatArr = arr.flat(Infinity)
//console.log(flatArr)

//filter korbo akektar jonno ekekta button banabo but eikhane 2bar ache tai eita change korte hobe jeno ekbar e ase 
const tagsFromPosts = [
    ["javascript", "react", "css"],
["node", "express"],
["css", "html", "react"]
];
//remove duplicate nd make it flat
//const filterTags = new Set(tagsFromPosts.flat())
//now make both with an array 
const filterTags = [...new Set(tagsFromPosts.flat())]
console.log(filterTags)