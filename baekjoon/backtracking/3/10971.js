/** 외판원 순회(TSP) 2 - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - 어떤 노드에서 출발하든 상관없다. 임의의 노드를 정해서 출발하면 된다.
  - 첫 번째 행과 첫 번째 열은 사용하지 않는다.

  1 -> 2 -> 3 -> 4
  1 -> 3 -> 2 -> 4
  1 -> 2 -> 4 -> 3
  1 -> 3 -> 4 -> 2

  2. 자료구조  
  - graph[] : 이동 비용이 담긴 2차원 배열
  - result[] : 현재까지 선택된 도시를 저장하는 배열
  - visited[] : 방문 여부를 저장하는 배열 */
const fs = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = []; // 비용 그래프
for (let i = 0; i <= n; i++) graph.push([0]);
for (let i = 1; i <= n; i++) {
  line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) graph[i].push(line[j]);
}
let visited = new Array(11).fill(false); // 이미 방문한 도시 표시
let result = []; // 지나온 도시의 배열
let minValue = 1e9; // 최소 비용을 비교하며 갱신해나가기

function dfs(depth) {
  // depth = 0 : 1번 도시
  if (depth == n - 1) {
    let totalCost = 0;
    let currNode = 1;
    // 1번 -> 2번째 도시 -> 3번째 도시 -> 마지막 도시
    for (let i = 0; i < n - 1; i++) {
      let nextNode = result[i];
      let cost = graph[currNode][nextNode];
      if (cost == 0) return;
      totalCost += cost;
      currNode = nextNode;
    }
    // 마지막 도시 -> 1번으로 복귀
    let cost = graph[currNode][1];
    totalCost += cost;
    minValue = Math.min(minValue, totalCost);
  }

  for (i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
dfs(0);
console.log(minValue);
