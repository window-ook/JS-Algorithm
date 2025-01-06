/** 텀 프로젝트 - 난이도 ⭐️⭐️⭐️

  1. 아이디어
  - 이 문제는 사이클을 구성하는 부분 그래프에 포함된 노드의 개수를 세는 문제
  - 그 다음 전체 노드 수에서 구한 개수를 빼준다

  2. 자료구조
  - graph, visited, finished, result */
let fs = `2
  7
  3 1 3 7 3 4 6
  8
  1 2 3 4 5 6 7 8`;
let input = fs.split('\n');
let testCase = Number(input[0]);
let line = 1;
while (testCase--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(' ').map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  line += 2;
  console.log(n - result.length); // 전체 학생 - 프로젝트에 참여하는 학생 수
}

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; // 방문처리
  let y = graph[x];
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    // 방문한 적 있지만 끝나지 않은 = 사이클
    while (y != x) {
      result.push(y); // 사이클인 애들을 결과에 다 넣기
      y = graph[y]; // 다시 x가 되기 전까지 사이클을 이루는 노드를 전부 추가
    }
    result.push(x); // 사이클에 x를 넣기
  }
  finished[x] = true; // 현재 노드 종료 처리
}
