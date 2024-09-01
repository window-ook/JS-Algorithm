const fs = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split('').map(Number));
}
let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j); // 현재 위치 기준
    if (current > 0) answer.push(current); // 단지의 집 수를 answer에 추가
  }
}
answer.sort((a, b) => a - b);
console.log(answer.length + '\n' + answer.join('\n'));

function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;
  if (graph[x][y] >= 1) {
    graph[x][y] = -1;
    let result = 1;
    result += dfs(x - 1, y);
    result += dfs(x + 1, y);
    result += dfs(x, y - 1);
    result += dfs(x, y + 1);
    return result;
  }
  return 0;
}
