module.exports =  {
    reversTheNumber,
    isPalindrom,
    isBlank,
    stringToArray,
    abbreviateName,
    titleCase,
    appendChart,
    isLastDigitsSame,
    bubbleSort,
    swapCharacters

}
// Homework 1
function reversTheNumber(number) {
    let str = number + ""
    let result = str.split("").reverse().join("")
    if (result.substring(0, 1) === "0") {
        return result.substring(1, result.length)
    } else {
        return result
    }
}
// Homework 2
function isPalindrom(text) {
    let revers = text.split("").reverse().join("");
    return text === revers
}
// Homework 3
function isBlank(text) {
    return text.length <= 0
}
// Homework 4
function stringToArray(text) {
    if(text.length > 0) {
        return text.split(" ");
    }else {
        return text.split("")
    }
}
// Homework 5
function abbreviateName(name) {
    let convertName = name.split(" ");
    if (convertName.length > 1) {
        return (convertName[0] + " " + convertName[1].charAt(0) + ".");
    }
    return convertName[0]
}
// Homework 6
function titleCase(text) {
    let lowerCase = text.toLowerCase().split(" ");
    let result = lowerCase.map(function (val) {
        return val.substring(0, 1).toUpperCase() + val.substring(1, val.length);
    });

    return result.join(" ");
}
// Homework 7
function appendChart(text) {
    let letter = text.substring(0, 1).toLowerCase()
    return  letter + text + letter

}
// Homework 8
function isLastDigitsSame(...number) {
    let lastNumber = number[0] % 10;
    number.forEach(function (val) {
        if (val % 10 !== lastNumber) {
            lastNumber = false;
        }
    });

    if (lastNumber === false) {
        return true
    } else {
        return false
    }
}

// Homework 9
let alphabet = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A"
};

function swapCharacters(alphabet, text) {
    let uPPerText = text.toUpperCase();
    let result = "";
    for (const item of uPPerText) {
        if (item === " ") {
            result += " ";
            continue;
        }
        result += alphabet[item];
    }
    return result.toLowerCase();
}
// Homework 10
function bubbleSort(number, operate) {

    for( let i= 0; i< number.length; i++) {

        for( let g= 0; g< number.length; g++) {

            switch(operate) {
                case "<":

                    if(number[g] < number[g+ 1]) {
                        let val = number[g];
                        number[g] = number[g+ 1];
                        number[g+1] = val
                    }
                    break;

                case ">":
                    if(number[g] > number[g+ 1]) {
                        let val = number[g];
                        number[g] = number[g+ 1];
                        number[g+1] = val
                    }
                    break;

                default:
                    return "throw new Error (\"not a valid order type\")"
            }
        }
    }

    return number
}