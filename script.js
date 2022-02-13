function test() {
  console.log("this inside function", this);
}

// test();

const test1 = () => {
  console.log("this inside arrow function", this);
};
// test1();

const obj = {
  func: function () {
    console.log("this inside object method", this, this === obj);
  },

  funcArrow: () => {
    console.log("this inside object arrow method", this, this === obj);
  },

  funcSetTimeout: function () {
    setTimeout(function () {
      console.log(
        "this inside obj method setTimeout with normal function",
        this
      );
    }, 0);
  },
  funcSetTimeoutArrow: () => {
    setTimeout(() => {
      console.log(
        "this inside obj method setTimeout with arrow function",
        this
      );
    }, 0);
  },
};

// obj.func();
// obj.funcArrow();
// obj.funcSetTimeout();
obj.funcSetTimeoutArrow();

let obj1 = obj.func;
let obj2 = obj.funcArrow;
obj1();
obj2();
