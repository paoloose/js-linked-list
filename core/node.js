export class Node {
  /** @type {Node?} **/
  data = null
  /** @type {Node?} **/
  next = null

  constructor(data) {
    this.data = {...data};
    this.next = null;
  }
}
