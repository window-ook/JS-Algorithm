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
let result1 = 0;
let result2 = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (graph[x][y] == graph[nx][ny]) dfs(nx, ny);
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
