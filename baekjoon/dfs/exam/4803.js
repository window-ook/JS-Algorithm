/** 트리 - 난이도 ⭐️⭐️ 
  1. 아이디어 : 그래프 그리고, 노드끼리 사이클이 만들어지는 경우 찾고 사이클이 아니면 트리 개수 올리기

  2. 시간 복잡도 :

  3. 자료구조 : */
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
let testCase = 1;
while (true) {
  let [n, m] = input[line].split(' ').map(Number);
  if (n == 0 && m == 0) break;
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = []; // 트리 그리기
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let cnt = 0; // 트리 개수
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) cnt++; // 연결 되어있으면서 사이클이 아니라면 트리 수 증가
    }
  }
  // 트리 개수별 출력
  if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
  else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  line += m + 1;
  testCase++;
}

function isCycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    // 다음 노드를 아직 방문하지 않았다면
    if (!visited[y]) {
      if (isCycle(y, x)) return true; // 사이클 발생
    } else if (y != prev) {
      return true; // 방문한 적 있는 노드인데, 직전 노드가 아니라면(무방향 그래프)
    }
  }
  return false;
}
