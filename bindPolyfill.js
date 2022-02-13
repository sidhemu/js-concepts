let name = {
  firstName: "Siddharth",
  lastName: "Hembrom",
};

let printName = function (homeTown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      " , " +
      state +
      " , " +
      country
  );
};

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, args2]);
  };
};

let printMyName = printName.myBind(name, "Ranchi", "Jharkhand");

printMyName("India");
