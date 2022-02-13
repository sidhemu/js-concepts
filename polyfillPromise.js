function PromisePolyFill(executor) {
  let onResolve, onReject;
  let fulfilled = false,
    rejected = false,
    called = false,
    value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    if (typeof onResolve === "function") {
      onResolve(value);
      called = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.resolve = function (val) {
    resolve(val);
    return this;
  };

  function reject(reason) {
    rejected = true;
    value = reason;
    if (typeof onReject === "function") {
      onReject(value);
      called = true;
    }
  }

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  this.reject = function (val) {
    reject(val);
    return this;
  };

  this.all = function (promises) {
    let fulfilledPromises = [],
      result = [];

    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        })
    );
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// PromisePolyFill.resolve = (val) => new PromisePolyFill(() => {}).resolve(val);
// PromisePolyFill.reject = (val) => new PromisePolyFill(() => {}).reject(val);
// PromisePolyFill.all = (promises) => new PromisePolyFill(() => {}).all(promises);
let promise = new PromisePolyFill((resolve, reject) =>
  setTimeout(() => resolve(1000), 1000)
);
// let promise = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(1000), 1000)
// );

promise.then((el) => console.log("test", el)).catch((err) => console.log(err));
