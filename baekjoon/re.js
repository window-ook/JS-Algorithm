const fs = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`;
const input = fs.split('\n');
let testCases = Number(input[0]);
let line = 1;
while (testCases--) {
  let [m, n, k] = input[line].split(' ').map(Number);
  let graph = [];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++;
    }
  }
  line += k + 1;
  console.log(answer);
}

function dfs(graph, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  if (graph[x][y] == 1) {
    graph[x][y] = -1;
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y + 1);
    dfs(graph, n, m, x, y - 1);
    return true;
  }
  return false;
}
