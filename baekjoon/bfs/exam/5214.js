// 환승 ⭐️⭐️⭐️

const fs = `15 8 4
11 12 8 14 13 6 10 7
1 5 8 12 13 6 2 4
10 15 4 5 9 8 14 12
11 12 14 3 5 6 1 13`;
const input = fs.split('\n');
const [n, k, m] = input[0].split(' ').map(Number);
let graph = new Array(n + m + 1).fill(null).map(() => []); // 원래 노드 + 하이퍼튜브
let visited = new Set([1]); // 방문한 노드

for (let i = 1; i <= m; i++) {
  let connection = input[i].split(' ').map(Number);
  let hyper = n + i;
  for (let station of connection) {
    graph[station].push(hyper);
    graph[hyper].push(station);
  }
}

console.log(graph);

let queue = new Queue();
queue.enqueue([1, 1]);
let found = false;

while (queue.getLength() != 0) {
  let [dist, curr] = queue.dequeue();

  if (curr === n) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }

  for (let next of graph[curr]) {
    if (!visited.has(next)) {
      visited.add(next);
      queue.enqueue([dist + 1, next]);
    }
  }
}

if (!found) console.log(-1);
