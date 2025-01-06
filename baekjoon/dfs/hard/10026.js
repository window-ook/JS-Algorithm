/** 적록색약 - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - dfs는 해당 위치로부터 연결된 모든 노드(상하좌우)를 이동하면서 방문 처리한다
  - dfs가 종료되고 인접한 값들을 모두 돌아서 확인되면 result를 증가시킨다
  - 일반인이 보는 구역과 적록색약이 보는 구역의 수를 따로 저장한다
  - 방문 배열을 일반인 검사와 적록색약 검사할 때 모두 초기화해줘야 한다
  - 적록색약일 때는 R을 G로 통일한다

  2. 자료구조 
  - graph, visited, result1, result2, dx, dy
    */
let fs = `5
  RRRBB
  GGBBB
  BBBRR
  BBRRR
  RRRRR`;
let input = fs.split('\n');
let n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split('');
  graph.push(row);
}
let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];
let visited = [];
let result1 = 0;
let result2 = 0;

function dfs(x, y) {
  if (visited[x][y] == false) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      // 같은 영역이면 계속 dfs를 진행하고
      if (graph[x][y] == graph[nx][ny]) dfs(nx, ny);
    }
    // 완료 후 true 반환
    return true;
  }
  return false;
}

// 정상인일 때 같은 구역을 찾을 때마다 result1++;
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

// G -> R
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == 'G') graph[i][j] = 'R';
  }
}

// 적록색약일 때
visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}
console.log(result1, result2);
