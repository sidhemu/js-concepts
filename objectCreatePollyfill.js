if (typeof Object.create !== "function") {
  Object.create = function (parent) {
    function Tmp() {}
    Tmp.prototype = parent;
    return new Tmp();
  };
}

const Parent = function () {
  this.name = "Parent";
};

Parent.prototype.greet = function () {
  console.log("hello from Parent");
};

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log("waahh");
};

child.cry();
child.greet();
