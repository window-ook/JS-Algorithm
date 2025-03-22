class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enq(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority <= element.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  deq() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[0];
    const length = this.values.length - 1;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild, rightChild;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

function solution(N, road, K) {
  let INF = 1e9;
  let graph = Array(N + 1)
    .fill(null)
    .map(() => []);
  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
  let distance = new Array(N + 1).fill(INF);

  function dijkstra() {
    let pq = new PriorityQueue();
    pq.enq(1, 0);
    distance[1] = 0;

    while (pq.values.length !== 0) {
      let node = pq.deq();
      let now = node.val;
      let dist = node.priority;

      if (distance[now] < dist) continue;
      for (let i of graph[now]) {
        let cost = i[1] + dist;
        if (cost < distance[i[0]]) {
          distance[i[0]] = cost;
          pq.enq(i[0], cost);
        }
      }
    }
  }

  dijkstra();
  const result = distance.filter((d) => d <= K).length;
  return result;
}
