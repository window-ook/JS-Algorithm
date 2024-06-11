/** N과 M (3) - 난이도 ⭐️⭐️
  1. 아이디어: dfs 사용 + visited[]를 적용하지 않으면 같은 숫자를 여러번 고를 수 있게 된다.

  2. 시간복잡도: N^N
  
  3. 자료구조: arr[] 수열에 넣을 원소들, selected[] 현재 인덱스 , answer 정답 출력
  */

const fs = `4 2`;
const input = fs.split(' ');
const [n, m] = input.map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let selected = [];
let answer = '';

function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + ' ';
    answer += '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}
dfs(arr, 0);
console.log(answer);
