// Iterate Map
console.log("=====================Iterate Map=====================");
for (const el of new Map([
  ["a", 1],
  ["b", 2],
])) {
  console.log(el);
}
console.log("\n");

// Iterate Set
console.log("=====================Iterate Set=====================");
for (const el of new Set([1, 2, 3])) {
  console.log(el);
}
console.log("\n");

// Iterate Array
console.log("=====================Iterate Array=====================");
for (const el of ["lodash", "ramda", "fxts"]) {
  console.log(el);
}
console.log("\n");

// !Iterate plain object
/*
const obj = { a: 1, b: 2 };
for (const el of obj) {
  console.log(el); //! Uncaught TypeError: obj is not iterable
}

*/

// Currently obj is not iterable
console.log("=====================Iterate Object=====================");
const obj = {
  a: 1,
  b: 2,
  c: 3,
  // Make iterable obj
  [Symbol.iterator]() {
    let i = 0;
    const values = Object.values(this);
    return {
      next() {
        return i == values.length
          ? { done: true }
          : { value: values[i++], done: false };
      },
      [Symbol.iterator]() {
        return this;
      }, // well-formed iterator
    };
  },
};

// Now you can iterate it with `for of` statement.
for (const el of obj) {
  console.log(el);
}

console.log("\n");

console.log(
  "=====================terator using a generator function====================="
);
