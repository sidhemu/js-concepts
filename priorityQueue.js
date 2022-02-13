class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  printCollection() {
    // console.log("print log for the collection ", this);
    return this.collection;
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    let value = this.collection.shift();
    return value[0];
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

let pq = new PriorityQueue();

pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["SidHemu", 1]);
pq.enqueue(["Lorem Text", 3]);

console.log(pq.printCollection());
