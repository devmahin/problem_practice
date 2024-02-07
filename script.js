// const person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
// //   txt += person[x] + " ";
// console.log(x)
// }

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
let myObjects = Object.keys(myObject);
// console.log(myObject)
for(let x of myObjects){
    console.log("key :" +x + " || " +"type :" + myObject[x])
}