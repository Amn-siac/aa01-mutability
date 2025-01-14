/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

function wordsLongerThan5(words) {
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            newArr[newArr.length] = words[i];
        }
    }
    return newArr;
}


// let words1 = ['bike', 'skateboard', 'scooter', 'moped'];
// let longerWords1 = wordsLongerThan5(words1);
// console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
// console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;