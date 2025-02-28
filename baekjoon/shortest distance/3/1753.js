// 최단경로 ⭐️⭐️⭐️
// 5 → 1 →  2 ↘
//          ↓   4
//          3 ↗

const PriorityQueue = require('../dijkstra/priorityqueue_class');

function dijkstra() {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost > distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

let file = `5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`;
let input = file.split('\n');
let INF = 1e9;
let [n, m] = input[0].split(' ').map(Number);
let start = Number(input[1]);
let graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
}
let distance = new Array(n + 1).fill(INF);

dijkstra();
for (let i = 1; i <= n; i++) {
  if (distance[i] == INF) console.log('INF');
  else console.log(distance[i]);
}
