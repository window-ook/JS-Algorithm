const fs = `2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`;
const input = fs.split('\n');
let testCases = Number(input[0]);
let line = 1;
while (testCases--) {
  const n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(' ').map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i, graph, visited, finished, result);
  }
  line += 2;
  console.log(n - result.length);
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x];
  if (!visited[y]) dfs(y, graph, visited, finished, result);
  else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
