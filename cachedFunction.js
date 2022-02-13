/*
We want to cache the result of the function operation. When it is called later, if the parameters are the same, the function will no longer be executed, but the result in the cache will be returned directly.
*/

function cached(fn) {
  //Create an object to store the results returned after each function executions.
  const cache = Object.create(null);

  //returns the wrapped function
  return function cachedFn(str) {
    //if the cache is not hit, the function will get execute
    if (!cache[str]) {
      let result = fn(str);

      //Store the result of the function execution in the cache
      cache[str] = result;
    }
    return cache[str];
  };
}
//Example
function computed(str) {
  console.log("2000s have passed", str);
  return "something";
}
let cachedComputed = cached(computed);
cachedComputed("anything");

cachedComputed("anything");
