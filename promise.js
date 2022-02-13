function CustomPromise(init) {
  let thenCallback;
  this.then = (cb) => {
    return new CustomPromise((resolve) => {
      thenCallback = (value) => {
        const result = cb(value);
        result instanceof CustomPromise
          ? result.then(resolve)
          : resolve(result);
      };
    });
  };
  const resolve = (value) => thenCallback && thenCallback(value);
  init(resolve);
}

new CustomPromise((resolve) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
})
  .then((data) => {
    console.log("then1 data", data, new Date());
    return 456;
  })
  .then((data) => {
    console.log("then2 data", data, new Date());
  });
