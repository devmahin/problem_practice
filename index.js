let largestArray = [11, 2, 3, 5, 35]
function largest(array) {
    if (!Array.isArray(array)) {
        return "plese submit array"
    }
    let len = array[0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "plesse number submit"
        }
        if (array[i] > len) {
            len = array[i]
        }
    }
    return len;
}
// console.log(largest(largestArray))





// AnaToVori
function AnaToVori(ana) {
    if (typeof ana !== "number") {
        return "pelese send number value"
    } else if (ana < 0) {
        console.log("please provide a integer value")
    }

    let vori = ana * 0.0625;
    return vori;
}
// console.log(AnaToVori(-2))


function pandaCost(singaraQuantity, comocaQuantity, gilapiQuantity) {
    if (typeof singaraQuantity !== "number" || typeof comocaQuantity !== "number" || typeof gilapiQuantity !== "number") {
        return "please valid number"
    } else if (singaraQuantity < 0 || comocaQuantity < 0 || gilapiQuantity < 0) {
        return "please possative number"
    }
    let singara = 5;
    let chomoca = 15;
    let gilapi = 5;

    let totalPrice = singara * singaraQuantity + chomoca * comocaQuantity + gilapi * gilapiQuantity;
    return totalPrice;
}
// console.log(
// pandaCost(1, 3,4)

// )




function picnicBudget(man) {

    if (typeof man !== "number" || man < 0) {
        return "please valid number"
    }

    let first100 = 5000;
    let second100 = 4000;
    let last100 = 3000;

    if (man <= 100) {
        return man * first100;
    }
    else if (man <= 200) {
        let first = first100 * 100;
        let remainder = man - 100;
        let result = (remainder * second100) + first;
        return result;
    } else if (man > 200) {
        let first = first100 * 100;
        let second = second100 * 100;
        let remainder = man - 200;
        let result = (remainder * last100) + first + second;
        return result;
    }
}
// console.log(
// picnicBudget(true)

// )






// let math = parseInt(Math.random() * 20 + 11);
// console.log(math)



function random(min, max) {
    let ran = Math.floor(Math.random() * (max - min + 1)) + min;
    return ran
}
// console.log(
// random(1, 6)

// )



const studentNames = [
    "Alice",
    "Emma",
    "Jack",
    "Bob",
    "David",
    "Charlie",
    "Frank",
    "Ivy",
    "Henry",
    "Grace",
    "Grace",
];

function student(studentNames) {
    let student = studentNames.sort()
    // console.log(student)
}
student(studentNames)




let name = [1, 4, 53, 43, 11, 54, 5, 67, 85];
function classRoll(roll) {
    let result = roll.sort(function (a, b) {
        return b - a;
    })
    return result;
}

// console.log(
// classRoll(name)
// )



// leap years 
function leapYears(year) {
    if (year % 400 !== 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return `Year is a leap ${year}`
    } else {
        return `Year is not leap ${year}`
    }

}

// console.log(leapYears(2026))



let sentence = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.";

function vowelsCheck(sentence) {
    // console.log(sentence)
    let count = 0;

    let vowel = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < sentence.length; i++) {
        if (vowel.includes(sentence[i])) {
            count++;
        }
    }
    // console.log(count)

}



vowelsCheck(sentence)



// Task-1:
// Count how many times a string has the letter a

// let sen = "Paragraphs are";
// function sentence2 (sentence){
//     let count = 0;
//     for(let i=0; i<sentence.length; i++){
//         if(sentence[i] === "a"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(sentence2(sen))






// Task-2:
// Count how many times a string has the letter a or A
let sen = "Paragraphs are A";
function sentence2(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "a" || sentence[i] === "A") {
            count++;
        }
    }
    return count;
}
// console.log(sentence2(sen))

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
const checkVowel = "bangladesh is a very hot and cool i u";
function vowelsCheckFun(sentence) {
    let v = ['a', 'e', 'i', 'o', 'u'];;
    for (let i=0; i<v.length; i++){
        // console.log(v[i])
        if(!sentence.includes(v[i])){
            return false;
        }
    }
    return true;

}
// console.log(
//     vowelsCheckFun(checkVowel)

// )



let repStr = "x is very X";
// console.log(repStr)
let replace = repStr.replace(/x/g, "y").replace(/X/g, "Y")
// console.log(replace)


// Task-5:
// Capitalize Every first Letter of each word in a String

let Capitalize = "Capitalize Every first Letter of each word in a String";

function CapitalizeFun(sentence){
    let sen = sentence.split(" ");
    // let store = "";
    for(let i=0; i<sen.length; i++){
        sen[i] = sen[i].charAt(0).toUpperCase() + sen[i].slice(1);
    }
    // console.log()
    let CapitalizeSpace = sen.join(" ")
    return CapitalizeSpace
}
console.log(

CapitalizeFun(Capitalize)

)




//     Task-5:
// Capitalize Every first Letter of each word in a String


// let par = "Google X Translate x bangladesh x"

// let words = par.split(" ")
// // console.log(words)

// let wordsCap = "";
// for (let i = 0; i < words.length; i++) {
//     // console.log()
//     let word = words[i] + " ";
//     // word[0] = 
//     wordsCap += word.charAt(0).toUpperCase() + word.slice("1")
// }
// console.log(wordsCap)




