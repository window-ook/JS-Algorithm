/** 외판원 순회(TSP) 2 - 난이도 ⭐️⭐️⭐️
 
1. 아이디어 : 
- 어떤 노드에서 출발하든 상관없다. 임의의 노드를 정해서 출발하면 된다.
- 2부터 N까지의 수를 하나씩 골라 나열하는 모든 순열을 계산하는 방법을 사용한다.

2. 시간 복잡도 : N!

3. 자료구조 :  
- graph[] 이동 비용이 담긴 2차원 배열
- result[] 현재까지 선택된 도시를 저장하는 배열
- visited[] 방문 여부를 저장하는 배열
 */
const fs = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`;
const input = fs.split('\n');
const n = Number(input[0]);
let graph = []; // 이동 비용이 담긴 2차원 배열
for (let i = 0; i <= n; i++) graph.push([0]);
for (let i = 1; i <= n; i++) {
  line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) graph[i].push(line[j]);
}
let visited = new Array(11).fill(false); // 방문 처리
let result = []; // 순열 정보 배열
let minValue = 1e9; // 비용의 최솟값

function dfs(depth) {
  // 현재 순열에 대한 처리
  if (depth == n - 1) {
    let totalCost = 0;
    let curr = 1; // 1번 노드에서 출발
    for (let i = 0; i < n - 1; i++) {
      let nextNode = result[i]; // 다음 이동 노드까지의 비용 계산 / 2
      let cost = graph[curr][nextNode]; // 비용 / graph[1][2]
      if (cost == 0) return; // 이동 불가능하면 무시
      totalCost += cost; // 이동 가능하면 비용을 더하고
      curr = nextNode; // 노드 이동
    }
    let cost = graph[curr][1]; // 마지막 노드에서 1로 돌아오는 것이 필수
    if (cost == 0) return; // 이동 불가능하면 무시
    totalCost += cost; // 이동가능하면 비용을 더하고 노드 이동
    minValue = Math.min(minValue, totalCost); //  경로의 최소 비용 저장
  }

  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i); // d0, [2] / d1 [2, 3] / d2 [2, 3, 4]
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
dfs(0);
console.log(minValue);
