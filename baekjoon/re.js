const fs = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`;
const input = fs.split('\n');
const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(' ').map(Number)); // 그래프로 배치
let visited = new Array(n).fill(false);
let minValue = 1e9;

function dfs(depth, start, cost) {
  if (depth === n - 1 && graph[start][0] !== 0) {
    minValue = Math.min(minValue, cost + graph[start][0]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i] && graph[start][i] !== 0) {
      visited[i] = true;
      dfs(depth + 1, i, cost + graph[start][i]);
      visited[i] = false;
    }
  }
}

visited[0] = true;
dfs(0, 0, 0);
console.log(minValue);
