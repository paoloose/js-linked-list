import { Employee } from '../entities/employee';
import { DoubleNode } from './double_node';

class IListDoble {
  /** @type {DoubleNode?} **/
  head = null


  /** @type {DoubleNode?} **/
  tail = null

  // Calle
  addFirst(newElem) {
    const newNode = new DoubleNode(newElem);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Calle
  addLast(newElem) {
    const newNode = new DoubleNode(newElem);
    if(!this.tail){
      this.head = newNode;
      this.tail = newNode;
    } else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Calle
  insertAt(index, newElem) {
    if(index < 0 || index > this.getSize()){
      console.log("WEBON DE MIERDA");
      return;
    }
    if(index === 0){
      this.addFirst(newElem);
      return;
    }
    if(index === this.getSize()){
      this.addLast(newElem);
      return;
    }

    const newNode = new DoubleNode(newElem);
    let temp = this.head;
    let currentIndex = 0;

    while(temp !== null){
      // Se coloca el nuevo nodo detras del valor que estaba en el indice
      if(currentIndex === index){
        newNode.prev = temp.prev; // Se guarda el valor previo de temp como valor previo del nuevo nodo
        newNode.next = temp;      // Se guarda el valor actual de temp como siguiente valor del nuevo nodo
        temp.prev.next = newNode; // El nuevo nodo se coloca como el siguiente valor del valor previo de temp
        temp.prev = newNode;      // El nuevo nodo se coloca como valor previo de temp
        break;
      }
      temp = temp.next;
      currentIndex++;
    }
  }

  // Damaris
  isEmpty() {
    return this.head === null;
  }

  // Damaris
  /**
   * @param {Employee} data
   * @returns {boolean}
   */
  contains(data) {
    let temp = this.head;
    while (temp != null){
        if (temp.data === data) {
            return true;
        }
        temp = temp.next;
    }
    return false;
  }

  // Damaris
  getSize() {
    let temp = this.head;
    let size = 0;
    while (temp != null){
        size++;
        temp = temp.next;
    }
    return size;
  }


  // Ruth
  getIndexOf(elem) {
    let temp = this.head;
    let index = 0;

    while(temp != null){
      if(temp.data == elem){
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1;
  }

  // Ruth
  getFirst() {
    return this.head ? this.head.data : null;
  }

  // Ruth
  getLast() {
    return this.tail ? this.tail.data : null;
  }

  // Paolo
  getAt(index) {
    let i = index;
    let temp = this.head;

    while (i-->0) {
      if (temp == null) return null;
      temp = temp.next;
    }

    return temp;
  }

  // Paolo
  toString() {
    let str = '';
    let temp = this.head;

    while (temp != null) {
      str += ` ${temp.data} <->`;
      temp = temp.next;
    }

    return str.slice(0, -3).trim();
  }

  // Paolo
  removeFirst() {
    if (this.head == null) return;
    this.head = this.head.next;
    this.head.prev = null;
  }

  // Toñito
  removeLast() {
    if( this.tail === null ) return null;
    const removedItem =  this.tail.data;
    this.tail =  this.tail.prev;
    if (this.tail !== null) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
  }

  // Toñito
  removeAll() {
    this.head = null;
    this.tail = null;
  }

}
