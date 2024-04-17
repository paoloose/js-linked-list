import { Node } from './node';

class IListCircular {
  /** @type {DoubleNode?} **/
  head = null
  /** @type {DoubleNode?} **/
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

    // at this point it should be the tail
    if (elem.code === cursor.data.code) {
      return true
    }
  }

  getFirst() {
    return this.head.data
  }

  getLast() {
    return this.tail.data
  }

  getAt(index) {}

  toString() {}

  removeFirst() {}

  removeLast() {}

  removeAll() {}
}


export {
  IListCircular
}

