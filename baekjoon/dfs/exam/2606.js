/** 바이러스 - 난이도 ⭐️⭐️
    1. 아이디어 : dfs 구현으로 1, 2, 3, 4, 5 출력되게 만들기
 
    2. 시간 복잡도 :

    3. 자료구조 :
    graph [] 그래프 정보
    count 1번 노드가 감염시킬 수 있는 노드 수 (완전탐색 결과)
    visited [] 방문 처리
 */
const fs = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;
const input = fs.split('\n');
let n = Number(input[0]); // 노드의 개수
let m = Number(input[1]); // 루트의 개수
let graph = [];
let count = 0;
let visited = new Array(n + 1).fill(false);
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  // 서로 연결되어있는 정보로 그래프 그리기
  graph[x].push(y);
  graph[y].push(x);
}
console.log(graph);

function dfs(x) {
  visited[x] = true;
  count++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}
dfs(1);
console.log(count - 1);
