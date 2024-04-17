import { Node } from './node';

class IListCircular {
  /** @type {Node?} **/
  head = null
  /** @type {Node?} **/
  tail = null

  size = 0

  addFirst(newElem) {
    newNode = new Node(newElem)
    newNode.next = head
    this.head = newNode
    if (this.tail !== null) {
      this.tail.next = this.head
    }

    this.size++
  }

  addLast(newElem) {
    newNode = new Node(newElem)
    newNode.next = this.head
    if (this.tail !== null) {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++
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

  isEmpty() {
    return (this.getSize() === 0)
  }

  contains(elem) {
    if (elem.code === undefined) {
      return false
    }

    let cursor = this.head
    while (cursor !== null && cursor !== this.tail) {
      if (this.compareData(elem, cursor.data)) {
        return true
      }

      cursor = cursor.next
    }

    // at this point it should be the tail
    if (elem.code === cursor.data.code) {
      return true
    }

    return false
  }

  getSize() {
    return this.size
  }

  getIndexOf(elem) {
    let index = 0
    if (elem.code === undefined) {
      return false
    }

    let cursor = this.head
    while (cursor !== null && cursor !== this.tail) {
      if (this.compareData(elem, cursor.data)) {
        return index
      }

      index++
      cursor = cursor.next
    }

    // at this point it should be at the tail
    if (elem.code === cursor.data.code) {
      return index
    }

    return -1
  }

  getFirst() {
    return this.head.data
  }

  getLast() {
    return this.tail.data
  }

  getAt(index) {
    cursor = this.head
    while (index--) {
      cursor = cursor.next
    }

    return cursor.data
  }

  toString() {}

  removeFirst() {}

  removeLast() {
    let cursor = this.head;
    if (cursor === null) return;
    while (cursor.next !== this.tail) {
      cursor = cursor.next;
    }

    cursor.next = this.tail.next;
  }

  removeAll() {}
}


export {
  IListCircular
}

