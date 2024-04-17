import { Node } from './node';

class IListCircular {
  data = null
  next = null

  head = null
  tail = null

  addFirst(newElem) {
    newNode = new Node(newElem)
    newNode.next = head
    this.head = newNode
    this.tail.next = this.head
  }

  addLast(newElem) {}

  insertAt(index, newElem) {}

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
