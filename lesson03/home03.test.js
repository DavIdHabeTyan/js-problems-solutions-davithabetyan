const {
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


} = require('./home03');

describe("Homework 3", () => {
// Part 2. Working with variables
    describe("1. changeValue(adminName)", () => {
        test("test 1 add userName return admin name", () => {
            const actual = changeValue("John");
            const expected = "John"
            expect(actual).toEqual(expected);

        })
    })
// What will be output of i and n?
    describe("2. outputIandN(numb)", () => {
        test(" add number iqEual i and n", () => {
            const actual = outputIandN(10);
            const expected = {i: 11, n: 0};
            expect(actual).toEqual(expected);
        })

    })
//Swap two variables
    describe("3. addNumb(10, 3)", () => {
        test("test 1 add  2 number and reverse  equal reverse number", () => {
            let a = 10, b = 3
            const actual = addNumb(a, b);
            const expected = {a: 3, b: 10};
            expect(actual).toEqual(expected);
        })

    })
    //Swap two variables without using the third one
    describe("4. addNumb2(10,3)", () => {
        test("tets 2 and 2 number and reverse equal reverse number", () => {
            let a = 10, b = 3;
            const actual = addNumb2(a, b);
            const expected = {a: 3, b: 10};
            expect(actual).toEqual(expected);

        })

    })

//string
//Uppercase the first character
    describe("ucFirst(john) ", () => {
        test("add loWercasse name to equal toUppercase Name", () => {
            const actual = ucFirst("john");
            const expected = "John";
            expect(actual).toEqual(expected);
        })
    })

//Check for spam
    describe("checkSpam(text)", () => {
        test("test 1. input text buy ViaGra now , to equal true, because have viagra", () => {
            const actual = checkSpam("buy ViAgrA now");
            const expected = true;
            expect(actual).toEqual(expected);

        })

        test("test 2. input fre xxxx to equal true ", () => {
            const actual = checkSpam("free xxxxxx");
            const expected = true;
            expect(actual).toEqual(expected);
        })

        test("test 3. input innocent rabit to equal false", () => {
            const actual = checkSpam("innocent rabbit");
            const expected = false;
            expect(actual).toEqual(expected);
        })

    })

//Three type sum
    describe("threetypeSum(string + number + number", () => {
        test("test 1. add string, number, number to equal value ", () => {
            const actual = threeTypeSum("", 1, 0);
            const expected = "10";
            expect(actual).toEqual(expected);
        })

        test("test 2. add number, number, string to equal value", () => {
            const actual = threeTypeSum(4, 5, "px");
            const expected = "9px";
            expect(actual).toEqual(expected);
        })
        test("test 3. add string, number, number", () => {
            const actual = threeTypeSum("$", 4, 5);
            const expected = "$45";
            expect(actual).toEqual(expected);
        })
    })


// Two type sum
    describe("twoTypeSum(string, boolean, null + number)", () => {
        test("test 1. add strin, number to equal value", () => {
            const actual = twoTypeSum("-9", 5);
            const expected = "-95";
            expect(actual).toEqual(expected);
        })

        test("test 2. add boolean type true false to equal value", () => {
            const actual = twoTypeSum(true, false);
            const expected = 1;
            expect(actual).toEqual(expected);
        })

        test("test 3. add null and number to equal value", () => {
            const actual = twoTypeSum(null, 1);
            const expected = 1;
            expect(actual).toEqual(expected);
        })

        test("test 4. add undefined amd number to equal value", () => {
            const actual = twoTypeSum(undefined, 1);
            const expected = NaN;
            expect(actual).toEqual(expected);
        })
    })

    describe("twoTypeSubtrac(strin - number)", () => {
        test("test 1. add string, number to equal value ", () => {
            const actual = twoTypeSubtrac("4", 2);
            const expected = 2;
            expect(actual).toEqual(expected);
        })
        test("test 2. add string, number to equal value", () => {
            const actual = twoTypeSubtrac("4px", 2);
            const expected = NaN;
            expect(actual).toEqual(expected);
        })
        test("test 3. add string, number to equal value", () => {
            const actual = twoTypeSubtrac("-9", 5);
            const expected = -14;
            expect(actual).toEqual(expected);
        })
    })


    describe("twoTypeDivision(number, string)", () => {
        test("tets 1. add number, string to equal value", () => {
            const actual = twoTypeDivision(6, "3");
            const expected = 2;
            expect(actual).toEqual(expected);
        })
        test("test 2. add number and 0 to equal value", () => {
            const actual = twoTypeDivision(7, 0);
            const expected = Infinity;
            expect(actual).toEqual(expected);
        })
    })


})