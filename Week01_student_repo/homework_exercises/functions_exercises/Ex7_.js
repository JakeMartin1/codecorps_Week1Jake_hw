/*
Exercise 7 - CHALLENGE EXERCISE
Define a function called isTriangular that takes in one parameter, a number 
(integer) called num,
and returns true if that number is a triangular number and false otherwise. 
A triangular number is one that can be visually represented as a triangle.
Follow this link for 
more information: https://www.mathsisfun.com/algebra/triangular-numbers.html
*/

// num = (bottomNum(bottomNum + 1)) / 2
/*Your Code Here*/
let num = 66430
// 8 * num + 1 % num.sqrt()
//Math.sqrt()
console.log()

function isTriangular(num) {
    let square = ((8 * num) + 1)

    return ;
}

//Test Cases
console.log('True or False: 66430 is a triangular number?');
console.log(isTriangular(66430)); //Should be true

console.log('True or False: 2958342 is a triangular number?');
console.log(isTriangular(2958342)); //Should be false

console.log('True or False: 153 is a triangular number?');
console.log(isTriangular(153)); //Should be true

console.log('True or False: 2145 is a triangular number?');
console.log(isTriangular(2145)); //Should be true

console.log('True or False: 92 is a triangular number?');
console.log(isTriangular(92)); //Should be false
