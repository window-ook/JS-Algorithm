/* N과 M - 난이도 ⭐️⭐️

  1. 아이디어
  - 순열 구하기

  2. 자료구조
  - arr[]: 순열을 계산할 원소를 담은 배열
  - selected[]: answer 한 행에 해당하는 arr[i]의 i를 저장하는 배열 
  - visited[]: 중복 방지 체크 배열
*/

let file = `4 2`;
let [n, m] = file.split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let visited = new Array(n).fill(false);
let answer = '';

function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]); // 1, 2
    for (x of result) answer += x + ' '; // ['1 2'];
    answer += '\n'; // 1 2
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] == true) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);
