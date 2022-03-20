const {
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

} = require('./datetypes.js');

describe("Homework 2", function () {

    // 1. Write a function that reverses a number
    describe("1. reversTheNumber(number)", () => {
        test("test 1. adds 45677 to equal 77654", () => {
            const actual = reversTheNumber(45677);
            const expected = "77654";
            expect(actual).toEqual(expected);

        });

        test("test 2. adds 47890 to equal 9874", () => {
            const actual = reversTheNumber(47890);
            const expected = "9874";
            expect(actual).toEqual(expected);
        });
    })

    /*
        2. Write a function that checks whether a passed string is palindrom or not?
       A palindrom is a word, phrase, or sequence that reads the same backwords as forward
    */
    describe("2. isPalindrom(text)", () => {
        test("test 1. add madam to equal true ", () => {
            const actual = isPalindrom("madam");
            const expected = true;
            expect(actual).toEqual(expected);
        });

        test("test 2. add nurse to equal false", () => {
            const actual = isPalindrom("nurse");
            const expected = false;
            expect(actual).toEqual(expected);
        });
    })

    // 3. Write a function that checks whether or not the input string is blank

    describe("3. isBlank(text)", () => {
        test("test 1. add madam to equal false", () => {
            const actual = isBlank("madam");
            const expected = false;
            expect(actual).toEqual(expected);
        });

        test("test 2. add \"\" toequal true", () => {
            const actual = isBlank("");
            const expected = true;
            expect(actual).toEqual(expected);
        });
    })

    // 4. Write a function to split a string and convert it into an array of words

    describe("4. stringToArray(text)", () => {
        test("test 1. add Web Development to equal [\"Web\", \"Development\"]", () => {
            const actual = stringToArray("Web Development");
            const expected = ["Web", "Development"];
            expect(actual).toEqual(expected);
        });

        test("test 2. add \"\" to equal []", () => {
            const actual = stringToArray("");
            const expected = [];
            expect(actual).toEqual(expected);
        });
    })

    /*
    5. Write a function to convert a string (a person's first and last names) to
    abbreviated form. If there is only a first name listed, then return just that name
    */

    describe("5. abbreviateName(name)", () => {
        test("test 1. add \"Jon Doe\" to equal \"Jon D.\"", () => {
            const actual = abbreviateName("Jon Doe");
            const expected = "Jon D.";
            expect(actual).toEqual(expected);
        });

        test("test 2. add \"Jon Doe\" to equal \"Jon\" ", () => {
            const actual = abbreviateName("Jon");
            const expected = "Jon";
            expect(actual).toEqual(expected);
        });
    })

    /*
    6. Write a function to convert an input string to title case. Note that title case has
     the first letter of each word capitalized and every other word lowercase
    */

    describe("6. titleCase(text)", () => {
        test("test 1. add \"JavaScript exercise... \" to equal \"Javacript \"", () => {
            const actual = titleCase("JavaScript exercise. Python exercise");
            const expected = "Javascript Exercise. Python Exercise";
            expect(actual).toEqual(expected);
        });
    })

    /*
    7. Write a function to create new string from a given string with the first
    character of the given string added at the front and back
     */
    describe("7. appendChart(text)", () => {
        test("test 1. add \"Swift\" to equal \"sSwift\"", () => {
            const actual = appendChart("Swift");
            const expected = "sSwifts";
            expect(actual).toEqual(expected);
        });
    })
    /*
    8. Write a function to check whether the last digits of the given positive integers is
    same

    */
///
    describe("8. isLastDigitsSame(...number)", () => {
        test("test 1. add [134, 34, 4564] to equal true", () => {
            const actual = isLastDigitsSame([134, 34, 4564]);
            const expected = true;
            expect(actual).toEqual(expected);
        });
        test("test 2. add [134, 33] to equal false", () => {
            const actual = isLastDigitsSame([134, 33]);
            const expected = false;
            expect(actual).toEqual(expected);
        });
    })

    //9. write a JavaScript program to charge the characters in a string where a turns into z;
    describe("09. swapCharecters(alphabet, text)", () => {

        test("test 1. add text to equal word a to word z, n to m... ", () => {
            const alphabet = {
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
            const text = "web development";

            const actual = swapCharacters(alphabet, text);
            const expected = "dvy wvevolknvmg"
            expect(actual).toEqual(expected);
        })
    })

    // 10. Write Bubble Sort algorithm
    describe("10.bubbleSort(number, operate)", () => {

        test("test 1. add [...number] to equal sort maxNumber to minNumber", () => {
            const actual = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], "<");
            const expected = [
                3223, 546, 455, 345, 234,
                213, 122, 98, 84, 64,
                23, 12, 9, 4, 1
            ];
            expect(actual).toEqual(expected);
        });

        test("test 2. add [...number] to equal sort minNUmber to maxNumber", () => {
            const actual = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], ">");
            const expected = [
                1, 4, 9, 12, 23,
                64, 84, 98, 122, 213,
                234, 345, 455, 546, 3223
            ];
            expect(actual).toEqual(expected)
        });
        test("test 3. add [...number] to equal sort minNUmber to maxNumber", () => {
            const actual = bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], "+");
            const expected = "throw new Error (\"not a valid order type\")";
            expect(actual).toEqual(expected);
        });
    });

});