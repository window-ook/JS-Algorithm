/** N과 M (2) - 난이도 ⭐️⭐️
 1. 아이디어: dfs 사용 + start 변수를 사용해서 오름차순으로만 나오게 만들기(조합찾는 것과 동일함)

 2. 시간복잡도: N!

 3. 자료구조: arr[] 수열에 넣을 원소들, selected[] 현재 인덱스, visited[] 방문 여부, answer 정답 출력
 
 4. 코드 메커니즘
  처음 호출 dfs(arr, 0, 0)을 하면 selected = [0]이 되고 재귀 호출
  dfs(arr, 1, 1)이므로 selected = [0, 1]이 되고 재귀 호출
  depth가 m이므로 '1 2' 출력하고 depth 1일 때로 백트래킹 후 selected = [0]이 되고 i = 1의 실행 종료
  다음 i = 2 실행 시작 depth = 1, selected = [0, 2]에서 재귀 호출 
  depth가 m이므로 '1 3' 출력하고 depth 1일 때로 백트래킹 후 selected = [0]이 되고 i = 2의 실행 종료
  다음 i = 3 실행 시작 depth = 1, selected = [0, 3]에서 재귀 호출 
  depth가 m이므로 '1 4' 출력하고 depth 1일 때로 백트래킹 후 selected = [0]이 되고 i = 3의 실행 종료
  다음 i는 arr.length와 같으므로 for 반복문을 빠져나오게 된다 : depth = 1에서 depth = 0으로 백트래킹 하게 된다

  depth = 0으로 돌아와서 pop을 하고([]이 됨) i = 1 실행 시작, selected = [1]이 되고 재귀 호출 
  다음 i = 2 실행 시작 depth = 1, selected = [1, 2]에서 재귀 호출
  depth가 m이므로 '2 3' 출력하고 depth 1일 때로 백트래킹 후 seleted = [1]이 되고 i = 2의 실행 종료
  다음 i = 3 실행 시작 depth = 1, selected = [1, 3]에서 재귀 호출 
  ...
   */

const fs = `4 2`;
const input = fs.split(' ');
const [n, m] = input.map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let visited = new Array(n).fill(false);
let answer = '';

function dfs(arr, depth, start) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + ' ';
    answer += '\n';
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0, 0);
console.log(answer);
