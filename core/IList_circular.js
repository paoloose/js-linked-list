import { Node } from './node';

class IListCircular {
  data = null
  next = null

  head = null
  tail = null

  size = 0

  addFirst(newElem) {
    newNode = new Node(newElem)
    newNode.next = head
    this.head = newNode
    if (this.tail !== nul) {
      this.tail.next = this.head
    }

    this.size++
  }

  addLast(newElem) {
    newNode = new Node(newElem)
    newNode.next = this.head
    if (this.tail !== nul) {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++
  }

  size() {
    return this.size
  }

  // Si, por ejemplo, se tiene
  //      [ 1, 2, 3, 4, 5 ]
  // pos: [ 0, 1, 2, 3, 4 ]
  // E insertas "a" en (2)
  // Quedará
  //      [ 1, 2, "a", 3, 4, 5 ]
  insertAt(index, newElem) {
    cursor = this.head
    while (index--) {
      cursor = cursor.next
    }

    newNode = new Node(newElem)

    if (cursor === this.head) {
      this.head = newNode
    }

    newNode.next = cursor
    this.size++
  }

  isEmpty() {}

  contains(elem) {}

  getSize() {}

  getIndexOf(elem) {}

  getFirst() {}

  getLast() {}

  getAt(index) {}

  toString() {}

  removeFirst() {}

  removeLast() {}

  removeAll() {}
}


export {
  IListCircular
}

