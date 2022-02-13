class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    return this.collection;
  }

  enqueue(element) {
    return this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
}

const newQue = new Queue();

newQue.enqueue(3);
newQue.enqueue(4);
newQue.enqueue(2);
newQue.enqueue(6);

newQue.dequeue();
console.log(newQue.front());
console.log(newQue.print());
