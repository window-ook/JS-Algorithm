/** 숫자 고르기 - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - 위아래가 같거나, 다른 위치에 있지만 위아래로 짝이 될 수 있는 경우
  - 사이클을 판별하면 된다

  2. 자료구조
  - visited [] : 방문 처리를 위한 배열
  - finished [] : 완료 처리를 위한 배열
  - result [] : 사이클이 되는 노드를 담을 배열
  - answer [] : 출력할 정답을 담을 배열
   */
const fs = `7
  3
  1
  1
  5
  5
  4
  6`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) graph.push(Number(input[i]));
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];
for (let i = 1; i <= n; i++)
  if (!visited[i]) dfs(i, graph, visited, finished, result);
let answer = [];
for (let x of result) answer.push(x);
answer.sort((a, b) => a - b);
console.log(answer.length);
for (let x of answer) console.log(x);

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
