/** N과 M (4) - 난이도 ⭐️⭐️
  
  1. 아이디어
  - dfs 사용 + start를 사용하여 재귀 호출때마다 선택되는 값이 현재 값 이상이 되게 만들기
  
  2. 자료구조
  - arr[] : 수열에 넣을 원소들
  - selected[] : 현재 인덱스
  - answer : 정답 출력 */

const fs = `4 2`;
const input = fs.split(' ');
const [n, m] = input.map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
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
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}
dfs(arr, 0, 0);
console.log(answer);
