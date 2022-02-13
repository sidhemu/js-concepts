// * Implement this code

// * const result = calc.add(10).multiple(5).subtract(30).add(10);
// * console.log(result.total);

// ? Solution

const calc = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  multiple: function (a) {
    this.total *= a;
    return this;
  },
  subtract: function (a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiple(5).subtract(30).add(10);
console.log(result.total);
