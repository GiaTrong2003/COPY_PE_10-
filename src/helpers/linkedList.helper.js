class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  // print
  print() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  getSize() {
    console.log(this.size);
  }

  addSize(size) {
    this.size = this.size + size;
  }

  // sort
  sortAsc() {
    let currentFor = this.head;

    for (let i = 0; currentFor.next; i++) {
      // assign min = head
      let currentWhile = currentFor;
      let min = currentFor.value;
      //
      while (currentWhile.next) {
        // map each node
        currentWhile = currentWhile.next;
        // swap value min with current node
        if (min > currentWhile.value) {
          let temp = min;
          min = currentWhile.value;
          currentWhile.value = temp;
        }
      }

      // assign value currentFor = min
      currentFor.value = min;
      // next node
      currentFor = currentFor.next;
    }

    this.print();
  }

  //
  getList() {
    if (!this.head) {
      return "The list is empty.";
      return;
    }

    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    return result + "null";
  }

  // remove similar node
  distinctNode() {
    let currentFor = this.head;

    while (currentFor != null && currentFor.next) {
      // assign repeat = head
      let currentWhile = currentFor;

      while (currentWhile?.next) {
        // change node next when repeat node
        if (currentFor.value == currentWhile.next.value) {
          currentWhile.next = currentWhile.next.next;
        } else {
          // map each node
          currentWhile = currentWhile.next;
        }
      }

      // next node
      currentFor = currentFor.next;
    }

    return this.getList();
  }
}

export const merge = (list1, list2) => {
  let current = list1.head;
  // find last node in list 1
  while (current.next) {
    current = current.next;
  }

  // merge last node 1 with head of list 2
  current.next = list2.head;

  // add size
  list1.addSize(list2.size);

  list1.sortAsc();

  return list1.getList();
};

// const list1 = new LinkedList();
// list1.add(1);
// list1.add(2);
// list1.add(3);
// list1.add(5);

// const list2 = new LinkedList();
// list2.add(3);
// list2.add(4);

// console.log(merge(list1, list2))
