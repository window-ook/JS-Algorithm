// 삽입 O(log N), 삭제 O(log N), 탐색 O(N)
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
      if (element.priority >= parent.priority) break;
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
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild;
      let rightChild;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  size() {
    return console.log(this.values.length);
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// O(E log V)
function dijkstra() {
  let pq = new PriorityQueue();
  pq.enq(start, 0); // 시작 노드, 최단거리 0
  distance[start] = 0;
  while (pq.values.length !== 0) {
    // 가장 최단 거리가 짧은 노드 정보
    let node = pq.deq();
    let now = node.val;
    let dist = node.priority;

    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;

    // 현재 노드를 거치는 비용과 비교하기
    for (let i of graph[now]) {
      let cost = dist + i[1];
      // 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우 최단거리 갱신
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq(i[0], cost);
      }
    }
  }
}

let INF = 1e9;
let n = 7;
let start = 1;
let graph = [
  [],
  [
    [2, 3],
    [3, 1],
    [4, 2],
  ],
  [
    [1, 3],
    [3, 1],
    [5, 1],
  ],
  [
    [1, 1],
    [2, 1],
    [4, 3],
    [6, 5],
  ],
  [
    [1, 2],
    [3, 3],
    [7, 1],
  ],
  [
    [2, 1],
    [6, 2],
  ],
  [
    [3, 5],
    [5, 2],
  ],
  [[4, 1]],
];

let distance = new Array(n + 1).fill(INF);
dijkstra();
for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log('INFINITY');
  else console.log(distance[i]);
}
