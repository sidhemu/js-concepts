const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let that = this,
      args = arguments;
    if (flag) {
      func().apply(that, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
