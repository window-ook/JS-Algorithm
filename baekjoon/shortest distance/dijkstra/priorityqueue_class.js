class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // 요소 삽입
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this._bubbleUp();
  }

  // 최소값 제거 및 반환
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();

    return min;
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.heap.length === 0;
  }

  // 최소값 확인
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // 힙 정렬을 유지하도록 부모와 비교 후 교체
  _bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element.priority >= parent.priority) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  // 힙 정렬 유지: 루트 노드가 올바른 위치를 찾도록 정렬
  _bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}
