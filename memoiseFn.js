function memoize(fn, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProject = (num1, num2) => {
  for (let i = 0; i < 10000000000; i++) {
    return num1 * num2;
  }
};

const memoizeFunc = memoize(clumsyProject);

console.time("First Call");
console.log(memoizeFunc(9467, 7649));
console.timeEnd("First Call");

console.time("First Call");
console.log(memoizeFunc(9467, 7649));
console.timeEnd("First Call");
