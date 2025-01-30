const PriorityQueue = require('./priorityqueue');

function dijkstra() {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소 힙
  pq.enq([0, start]); // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  distance[start] = 0;
  // 우선순위 큐가 비어있지 않다면
  while (pq.size() != 0) {
    let [dist, now] = pq.deq(); // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    if (distance[now] < dist) continue; // 현재 노드가 이미 처리된 적이 있으면 무시하기
    // 현재 노드와 연결된 다른 인접한 노드들을 확인하기
    for (let i of graph[now]) {
      let cost = dist + i[1];
      // 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우 구하기
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

// 예제
let INF = 1e9; // 무한을 의미하는 10억
let n = 7; // 노드 개수
let start = 1; // 시작 노드 번호
// 각 노드에 연결되어있는 노드에 대한 정보를 담는 리스트를 만들기
// 각 간선은 [노드, 비옹] 형태
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
  if (distance[i] == INF) console.log('INFINITY');
  else console.log(distance[i]);
}
