module.exports = {
    changeValue,
    outputNumb,
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
function changeValue(adminName) {
    let admin;
    let name = adminName;
    admin = name;
    return admin
}

// What will be output of i and n?
function outputNumb(numb) {
    let i = numb;
    let n = i++ % 10;
    return {i, n}

}

// Swap two variables
function addNumb(numb1, numb2) {
    let c = numb1 + numb2;
    numb2 = c - numb2;
    numb1 = c - numb1
    return {numb1, numb2};
}

//Swap two variables without using the third one

function addNumb2(numb1, numb2) {

    [numb1, numb2] = [numb2, numb1];
    return {numb1, numb2};
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

    let newStr = str1.toLowerCase();
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