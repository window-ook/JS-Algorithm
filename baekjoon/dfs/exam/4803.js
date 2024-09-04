/** 트리 - 난이도 ⭐️⭐️ 
  
  1. 아이디어
  - 그래프 그리기
  - 방문하지 않았던 노드

  3. 자료구조
  - line : n, m을 가지고 있는 라인
  - testCase : 테스트 케이스 수
  - graph [] : 그래프
  - visited [] : 방문 처리 */
const fs = `6 3
1 2
2 3
3 4
6 5
1 2
2 3
3 4
4 5
5 6
6 6
1 2
2 3
1 3
4 5
5 6
6 4
0 0`;
const input = fs.split('\n');
let line = 0;
let testCase = 1; // 이어져있는 노드들
while (true) {
  let [n, m] = input[line].split(' ').map(Number); // 정점(노드), 간선
  if (n == 0 && m == 0) break; // 종료
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = []; // 그래프 만들기
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let cnt = 0; // 트리의 개수
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) cnt++; // 연결되어있으면서 사이클이 아니라면 트리 수 올리기
    }
  }
  // 트리 개수별 출력 케이스
  if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
  else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  line += m + 1;
  testCase++;
}

function isCycle(x, prev) {
  visited[x] = true; // 방문처리
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) return true; // graph[x]의 y를 방문한적 없는데 사이클이 있다면 true;
    } else if (y != prev) {
      return true; // 방문한 적 있는데 직전 노드가 아니라면 true;
    }
  }
  return false; // 다 해당되지 않으면 사이클이 아님
}
