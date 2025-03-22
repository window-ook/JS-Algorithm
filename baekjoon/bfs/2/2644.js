// 촌수계산
const file = require('fs').readFileSync('/dev/stdin');
const input = file.toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[2]);
const [t1, t2] = input[1].split(' ').map(Number);
let graph = Array(n + 1)
  .fill(null)
  .map(() => []);
for (let i = 3; i < m + 3; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
let visited = Array(n + 1).fill(false);

class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  enq(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  deq() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.tail - this.head;
  }
}

function bfs(start) {
  let queue = new Queue();
  queue.enq([start, 0]);
  visited[start] = true;

  while (queue.getLength() > 0) {
    let [curr, depth] = queue.deq();
    if (curr === t2) return depth;

    for (let next of graph[curr]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.enq([next, depth + 1]);
      }
    }
  }

  return -1;
}

console.log(bfs(t1));
