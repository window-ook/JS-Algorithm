/** 노드 사이의 거리 - 난이도 ⭐️⭐️

  1. 아이디어
  - 그래프 그리기
  - 각 노드에 [연결된 노드, 거리]를 저장시키기
  - dfs로 탐색하여 특정 노드 사이의 거리를 구하기

  2. 자료구조
  - graph [] : 그래프
  - distance [] : x부터 y 까지의 거리를 y 번째에 저장해두는 배열
  - visited [] : 방문 처리 */
const fs = `4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`;
//  x로 dfs를 실행하여 y까지 거리 출력하기
const input = fs.split('\n');
let [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  // 그래프 만들기
  // 1: [2, 2], [4, 3]
  // 2: [1, 2]
  // 3: [4, 2]
  // 4: [3, 2], [1, 3]
  let [x, y, cost] = input[i].split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(' ').map(Number); // 테스트 케이스
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0); // x부터 y까지 거리를 구해서 distance[y]에 저장
  console.log(distance[y]); // distance에서 x에서 y까지의 거리는 y번째 원소에 저장되어있음
}
