/** 텀 프로젝트 - 난이도 ⭐️⭐️⭐️

    1. 아이디어 :
    - 이 문제는 사이클을 구성하는 부분 그래프에 포함된 노드의 개수를 세는 문제
    - 그 다음 전체 노드 수에서 구한 개수를 빼준다

    2. 시간 복잡도 :
    - 그래프 그리기 O(n^2)

    3. 자료구조 :
 */
const fs = `2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`;
const input = fs.split('\n');
let testCases = Number(input[0]); // 테스트 케이스
let line = 1;
// 테스트 케이스 만큼 반복
while (testCases--) {
  let n = Number(input[line]); // 학생 수
  let graph = [0, ...input[line + 1].split(' ').map(Number)]; // 그래프 초기화 (0 포함)
  let visited = new Array(n + 1).fill(false); // 방문
  let finished = new Array(n + 1).fill(false); // 완료
  let result = []; // 사이클에 포함되어 있는 노드
  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  line += 2; // 다음 테스트 케이스의 학생 수
  console.log(n - result.length); // 프로젝트에 포함되지 못한 학생 수
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; // 현재 노드 방문 처리
  let y = graph[x]; // 다음 노드 y
  // 다음 노드를 방문한 적 없다면
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  }
  // 다음 노드를 방문한 적 있고 완료되지 않았다면
  else if (!finished[y]) {
    // 사이클
    while (y != x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true; // 현재 노드 완료 처리
}
