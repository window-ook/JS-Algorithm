/** 노드 사이의 거리 - 난이도 ⭐️⭐️
 1. 아이디어 :

 2. 시간복잡도 :

 3. 자료구조 :
 */
const fs = `4 2
2 1 2
4 3 2
1 4 3
1 2
3 2`;
// 그래프 그리고, x로 dfs 걸어서 y까지 거리 출력하기
const input = fs.split('\n');
let [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
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
  let [x, y] = input[n + i].split(' ').map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0); // x부터 y까지 거리 탐색
  console.log(distance[y]); // distance에서 y까지의 거리는 y번째에 저장되어있음
}
