class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    // Create a new data object
    const node = new Node(data);
    let current;

    // Create a head, if we dont have one
    if (!this.head) {
      this.head = node;
    } else {
      // If there already is a head, we add a node to our list
      current = this.head;
      // Loop to the end of our linked list
      // No next value
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  clearLinkedList() {
    this.head = null;
    this.size = 0;
  }
  removeAt(index) {
    // Check if index is bigger than 0 and index is smaller than the size of list.
    if (index > 0 && index < this.size) {
      return;
    }
    // Starting at the head
    let current = this.head;
    // Keep track of the previous element
    let previous;

    // count variable for iterating
    let count = 0;

    // if index is 0, then point to the head to the item second in the list
    if (index === 0) {
      this.head = current.next;
    } else {
      // lets loop over the list
      while (count < index) {
        // first increment the count
        count++;

        // set previous to current node
        previous = current;

        // set current node to our next node
        current = current.next;
      }
      // update the next pointer of our previous node to be the next node
      previous.next = current.next;
    }
    this.size--;
  }
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
// console.log(list);
debugger;
list.clearLinkedList();
// console.log(list);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(54880);
list.insert(23450);
list.insert(33450);
list.insert(165450);
list.insert(26230);
list.insert(310);
console.log(list);