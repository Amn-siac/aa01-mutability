/*
Write a function rotateRight(array, num) that takes in an array and a number as
args. The function should return a new array where the elements of the array are
rotated to the right num times. The function should not mutate the original
array and instead return a new array.

HINT: you can use Array's slice() method to create a copy of an array
*/

function rotateRight(array, num) {
    let newArr = array.slice();
    let temp = [];
    while (num !== 0) {
        if (num > 0) {
            temp = newArr.pop();
            newArr.unshift(temp);
            num--
        } else {
            break;
        }
    }
    return newArr;
}




// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotateRight;