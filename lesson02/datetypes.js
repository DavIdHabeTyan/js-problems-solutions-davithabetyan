module.exports = {
    reversTheNumber,
    checkReversText,
    isBlank,
    stringToArray,
    abbreviateName,
    titleCase,
    appendChart,
    isLastDigitsSame,
    bubbleSort,
    swapCharacters

}

//  1. Write a function that reverses a number
function reversTheNumber(number) {
    let str = number + ""
    let result = str.split("").reverse().join("")

    return +result
}

//  2. Write a function that checks whether a passed string is palindrom or not?
function checkReversText(text) {
    let revers = text.split("").reverse().join("");
    return text === revers
}

// 3. Write a function that checks whether or not the input string is blank
function isBlank(text) {
    return text.length <= 0
}

// 4. Write a function to split a string and convert it into an array of words
function stringToArray(text) {
    if (text.length > 0) {
        return text.split(" ");
    } else {
        return text.split("")
    }
}

// 5. Write a function to convert a string
function abbreviateName(name) {
    let convertName = name.split(" ");
    if (convertName.length > 1) {
        return (convertName[0] + " " + convertName[1].charAt(0) + ".");
    }
    return convertName[0]
}

// 6. Write a function to convert an input string to title case.
function titleCase(text) {
    let lowerCase = text.toLowerCase().split(" ");
    let result = lowerCase.map(function (val) {
        return val.substring(0, 1).toUpperCase() + val.substring(1, val.length);
    });

    return result.join(" ");
}

// 7. Write a function to create new string from a given string with the first character of the given string added at the front and back
function appendChart(text) {
    let letter = text.substring(0, 1).toLowerCase()
    return letter + text + letter

}

// 8. Write a function to check whether the last digits of the given positive integers is same
function isLastDigitsSame(...number) {
    let lastNumber = number[0] % 10;
    number.forEach(function (val) {
        if (val % 10 !== lastNumber) {
            lastNumber = false;
        }
    });

    if (lastNumber !== false) {
        return true
    } else {
        return false
    }
}

// 9. write a JavaScript program to charge the characters in a string where a turns into z;


function swapCharacters(text) {

    alphabet = {
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

// 10. Write Bubble Sort algorithm
function bubbleSort(number, operate) {

    for (let i = 0; i < number.length; i++) {

        for (let g = 0; g < number.length; g++) {

            switch (operate) {
                case "<":

                    if (number[g] < number[g + 1]) {
                        let val = number[g];
                        number[g] = number[g + 1];
                        number[g + 1] = val
                    }
                    break;

                case ">":
                    if (number[g] > number[g + 1]) {
                        let val = number[g];
                        number[g] = number[g + 1];
                        number[g + 1] = val
                    }
                    break;

                default:
                    return "throw new Error (\"not a valid order type\")"
            }
        }
    }

    return number
}