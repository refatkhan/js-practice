//number sorting
//const numbers = [40, 50, 26, 4, 6, 10];
//const sortNumbers = numbers.sort((a,b)=>a-b);
//console.log(sortNumbers);
//console.log(numbers)

//string 
//const fruits = ["banana", 'apple', "Cherry", "Date"]
//fruits.sort((a,b)=>a.localeCompare(b))
//console.log(fruits)

//nested array flat 
//const arr = [1,2,3,[6,7,8,[10,11,12,[4,6,98,4]]]]
//only one layer wii be changes
//const flatArr = arr.flat()
//if we want to specifically then we call give the depth of array layer
//const flatArr = arr.flat(2)

//now if we want to make total array into one then we use INfinity
//const flatArr = arr.flat(Infinity)
//console.log(flatArr)

//filter korbo akektar jonno ekekta button banabo but eikhane 2bar ache tai eita change korte hobe jeno ekbar e ase 
// const tagsFromPosts = [
//     ["javascript", "react", "css"],
// ["node", "express"],
// ["css", "html", "react"]
// ];
//remove duplicate nd make it flat
//const filterTags = new Set(tagsFromPosts.flat())
//now make both with an array 
// const filterTags = [...new Set(tagsFromPosts.flat())]
//console.log(filterTags)

//if some condition true then it will be true

// const numbers = [1,2,3,4,5,6];
// //return true
// const haveEvenNumber = numbers.some((number)=> number % 2 === 0 );
// const numbers2 = [1,3,5,5,7];
// const haveEvenNumber2 = numbers2.some((number2)=> number2 % 2 === 0 );
// console.log(haveEvenNumber)
// console.log(haveEvenNumber2);

// const currentUserRole = ["user", 'editor', "admin"];
// const featureAccessRoles = ["admin", "manager"];
// const  roleCheck = currentUserRole.some(role=> featureAccessRoles.includes(role));
// console.log(roleCheck)

//array.form()
//array create korbe eikhane .fill diye array element declare kora jay abar function diyeo kora jay 
// const arr = Array.from({length: 5}).fill(0)
// console.log(arr)

const range = (start, stop, step) =>Array.from({length: Math.ceil(stop-start)/step})