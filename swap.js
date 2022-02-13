// Using Arithmetic Operators + and -
//when we use floating-point numbers, we see some unexpected results
function swapWithPlusMinus(num1, num2) {
  console.log(num1, num2);
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  console.log(num1, num2);
}

function swapWithPlusMinusShort(num1, num2) {
  console.log(num1, num2);
  num2 = num1 + (num1 = num2) - num2;
  console.log(num1, num2);
}

swapWithPlusMinusShort(2, 3);

//Using Only + or — Operator
function swapWithPlus(num1, num2) {
  console.log(num1, num2);
  num2 = num1 + ((num1 = num2), 0);
  //num2 = num1 + 0 => num2 = num1
  console.log(num1, num2);
}
//Try with - operator
swapWithPlus(2.3, 3.4);

//Using Arithmetic Operators * and /
//doesnt work for NaN
function swapWithMulDiv(num1, num2) {
  console.log(num1, num2);
  num1 = num1 * num2;
  num2 = num1 / num2;
  num1 = num1 / num2;
  console.log(num1, num2);
}
swapWithMulDiv(2.34, 3.45);

function swapWithMulDivShort(num1, num2) {
  console.log(num1, num2);
  num2 = (num1 * (num1 = num2)) / num2;
  console.log(num1, num2);
}

swapWithMulDivShort(2.3, 3.4);

//Using Only * or / Operator
function swapWithMul(num1, num2) {
  console.log(num1, num2);
  num2 = num1 * ((num1 = num2), 1);
  console.log(num1, num2);
}
//Try with / and ** operator
swapWithMul(2.3, 3.4);

//Using Bitwise XOR.
function swapWithXOR(num1, num2) {
  console.log(num1, num2);
  num1 = num1 ^ num2;
  num2 = num1 ^ num2;
  num1 = num1 ^ num2;
  console.log(num1, num2);
}
// Try negative values
swapWithXOR(10, 1);

//Using Bitwise XNOR
//doesnt work with floating numbers and NaN
function swapWithXNOR(num1, num2) {
  console.log(num1, num2);
  num1 = ~(num1 ^ num2);
  num2 = ~(num1 ^ num2);
  num1 = ~(num1 ^ num2);
  console.log(num1, num2);
}
//Try negative values
swapWithXNOR(10, 1);

//Using assignment within Array
function swapWithArray(num1, num2) {
  console.log(num1, num2);
  num2 = [num1, (num1 = num2)][0];
  console.log(num1, num2);
}
swapWithArray(2.3, Infinity);

function swapUsingDestructuring() {
  let num1 = 23.45;
  let num2 = 45.67;

  console.log(num1, num2);

  [num1, num2] = [num2, num1];

  console.log(num1, num2);
}

function swapWithIIFE(num1, num2) {
  console.log(num1, num2);

  num1 = (function (num2) {
    return num2;
  })(num2, (num2 = num1));

  console.log(num1, num2);
}

swapWithIIFE(2.3, 3.4);
