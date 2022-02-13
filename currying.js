let sum = function (a) {
  function add(b) {
    return a + b;
  }
  if (typeof b === "undefined") {
    return add;
  } else {
    return add(b);
  }
};

let add = function (a) {
  return function (b) {
    if (b) {
      return add(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2));
console.log(add(1)(2)(3)());
