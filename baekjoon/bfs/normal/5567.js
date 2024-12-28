// 결혼식
// ⭐️⭐️

const fs = `6
5
1 2
1 3
3 4
2 3
4 5`;
const input = fs.split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
let graph = new Array(n + 1).fill(null).map(() => []);
let distance = new Array(n + 1).fill(-1);

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let queue = new Queue();
queue.enqueue(1);
distance[1] = 0;

while (queue.getLength() != 0) {
  let curr = queue.dequeue();

  for (let next of graph[curr]) {
    if (distance[next] == -1) {
      distance[next] = distance[curr] + 1;
      queue.enqueue(next);
    }
  }
}

let count = 0;
for (let i = 1; i <= n; i++)
  if (distance[i] !== -1 && distance[i] <= 2) count++;
console.log(count - 1);
