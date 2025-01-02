// 문제 풀이 파일
let fs = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`;
let input = fs.split('\n');
let n = Number(input[0]);
// 그래프 그리기
let graph = [];
for (let i = 1; i <= n; i++) {
  let row = input[i].split('');
  graph.push(row);
}
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let visited = [];
let result1 = 0;
let result2 = 0;

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (graph[nx][ny] == graph[x][y]) dfs(nx, ny);
    }
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] == 'G') graph[i][j] = 'R';
  }
}

visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}
