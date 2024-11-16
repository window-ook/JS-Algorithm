class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  getIndex(item) {
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      if (this.items[i] === item) {
        return i - this.headIndex;
      }
    }
    return -1;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
