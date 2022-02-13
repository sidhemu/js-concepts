class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(element) {
    let current = this.head;
    let prev = null;
    if (current.element === element) {
      this.head = current.next;
    } else {
      while (current.element !== element) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }

  printLL(list) {
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.element);
      current = current.next;
    }

    console.log(result.join("=>"));
  }
}

let conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Bull");
conga.add("Cat");
conga.printLL(conga);

let conga2 = new LinkedList();
conga2.add("pizza");
conga2.add("burger");
conga2.add("taco");
conga2.add("sushi");
conga.printLL(conga2);

// console.log("linked list ====>>>>", conga);
