module.exports = {
   arrToObject,
   returnHeadAndTail,
   zipObject
}
//exercises 1. Write function that will do reverse operation for

function arrToObject(arr) {
   const newObj = {};
   for(let i = 0; i < arr.length; i++) {
      newObj[arr[i][0]] = arr[i][1]
   }

   // return newObj = Object.fromEntries(arr);
   return newObj
}

// Exercises 2. Write functions that willreturn head and tail of Array
function returnHeadAndTail(getHead, getTail){
   getHead = [1, 2, 3]
   getTail = [1, 2, 3]

   return [
      getHead.slice(0, 1),
      getTail.slice(1, getTail.length)
   ]
}


//Exercises 3. Write function that will zip arrays into object

function zipObject(letter, arrNumber) {
   let obj = {};

   letter = ["a", "b", "c"];
   arrNumber = [1, 2];

   for (let i = 0; i < letter.length; i++) {
      if(arrNumber[i] === undefined){
         arrNumber[i] = null
      }
      obj[letter[i]] = arrNumber[i]
   }

   return obj

}



