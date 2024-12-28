/** 치킨 배달 - 난이도 ⭐️⭐️⭐️
  
  1. 아이디어 
  - 모든 조합을 구하는 문제

  2. 자료구조 
  - chicken [] : 치킨 가게 위치 2인 곳
  - house [] : 집 위치 1인 곳
  - selected [] : 선택된 조합
  - answer : 치킨 거리
  - result [] : 치킨 거리 조합 */
const fs = `5 3
0 0 1 0 0
0 0 2 0 1
0 1 2 0 0
0 0 1 0 0
0 0 0 0 2`;
const input = fs.split('\n');
let [n, m] = input[0].split(' ').map(Number);
let chicken = [];
let house = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] == 1) house.push([i, j]); // 집의 좌표들
    if (line[j] == 2) chicken.push([i, j]); // 치킨 가게의 좌표들
  }
}
let visited = new Array(chicken.length).fill(false);
let selected = [];
let answer = 1e9;

function dfs(depth, start) {
  // m개를 고르는 조합
  if (depth == m) {
    let result = []; // 조합 결과 저장
    let sum = 0; // 치킨 거리의 합
    for (let i of selected) result.push(chicken[i]);
    // 모든 집에 대해 가장 가까운 치킨집 찾기
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [cx, cy] of result)
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy)); // 집과 치킨집과의 거리를 더하고 최솟값 비교
      sum += temp;
    }
    answer = Math.min(answer, sum);
  }

  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(0, 0);
console.log(answer);
