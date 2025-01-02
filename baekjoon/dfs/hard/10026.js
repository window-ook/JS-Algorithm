/** 적록색약 - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - dfs는 해당 위치로부터 연결된 모든 노드(상하좌우)를 이동하면서 방문 처리한다
  - dfs가 종료되고 인접한 값들을 모두 돌아서 확인되면 result를 증가시킨다
  - 일반인이 보는 구역과 적록색약이 보는 구역의 수를 따로 저장한다
  - 적록색약일 때는 R을 G로 통일한다

  2. 자료구조 
  - graph, visited, result1, result2, dx, dy
    */
const fs = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(''));
let visited = [];
let result1 = 0; // 일반인이 보는 구역 수
let result2 = 0; // 적록색약이 보는 구역 수
let dx = [-1, 1, 0, 0]; // 상하 이동
let dy = [0, 0, -1, 1]; // 좌우 이동

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue; // 맵 이탈 방지
      if (graph[x][y] == graph[nx][ny]) dfs(nx, ny); // 같은 구역이면
    }
    return true; // 새로운 구역 발견했으니 true
  }
  return false; // 방문한 노드라면 false
}

// 일반인이 보는 구역
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

// 적록색약은 R과 G가 같다
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == 'R') graph[i][j] = 'G';
  }
}
visited = [];

for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}

console.log(result1 + ' ' + result2);
