const {
   arrToObject,
   returnHeadAndTail,
   zipObject,
} = require('./օbject');

describe('Homework 5 exercises Object', () => {


//exercises 1. Write function that will do reverse operation for
   describe('exercises 1 revers operator', () => {
   test("test 1. array to equal object", () => {
      const actual = arrToObject([["a", 1], ["b", 2]]);
      const expected = {a: 1, b: 2};
      expect(actual).toEqual(expected);

      });
   });

   //exercises 2. Write functions that willreturn head and tail of Array
   describe("exerices 2, return head and tail of Array", () => {
      test('test 1. input Arrat to equal head and tail of Array', () => {
         const actual = returnHeadAndTail([1, 2, 3], [1, 2, 3]);
         const expected = [[1], [2, 3]]
            expect(actual).toEqual(expected);
      })
   })


  // exersises 3. Write function that will zip arrays into object
 describe('Write function that will zip arrays into object', () =>{
    test('test 1. input ArrayLeter and array number to equal object', () => {
       const actual = zipObject( ["a", "b", "c"], [1, 2]);
       const expected = {'a': 1, 'b': 2, 'c': null}
       expect(actual).toEqual(expected);
    })
 })

});