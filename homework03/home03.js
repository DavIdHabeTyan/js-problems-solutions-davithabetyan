module.exports = {
    changeValue,
    outputIandN,
    addNumb,
    addNumb2,
    ucFirst,
    checkSpam,
    threeTypeSum,
    twoTypeSum,
    twoTypeSubtrac,
    twoTypeDivision


}

// Part 2. Working with variables
function changeValue(adminName){
    let admin;
    let name = adminName;
    admin = name;
    return  admin
}
// What will be output of i and n?
function outputIandN(numb) {
    let i = numb;
    let n = i++ % 10;
    return {i, n}

}

// Swap two variables
function addNumb(numb1, numb2) {
    let a = numb1, b = numb2;
    let c =  numb1 + numb2;
    b = c - b;
    a = c - a
    return {a, b};
}

//Swap two variables without using the third one

function addNumb2(numb1, numb2) {
    let a = numb1, b = numb2;
    [a, b] = [b, a];
    return {a, b};
}

//string
//Uppercase the first character
let str = "John";
function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1)

    return newStr
}

//Check for Spam

function checkSpam(str1) {

    let newStr = str1.toLowerCase() ;
    return newStr.includes("viagra") || newStr.includes("xxx");
}
//What will be the result and why?

//Three type sum
function threeTypeSum(a, b, c) {
    return a + b + c;
}
// Two type sum
function twoTypeSum(a, b) {
    return a + b;
}

//Two type Subtraction
function twoTypeSubtrac(a, b) {
    return a - b;
}

//Two type Division
function twoTypeDivision(a, b) {
    return a / b;
}