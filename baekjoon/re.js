/*N과 M
1. 아이디어
- 순열 구하기

2. 시간 복잡도
N! (중복 불가능)

3. 자료구조
- arr[] 순열을 계산할 원소를 담은 배열 : int
- visited[] 방문 여부 : boolean
- selected[] 현재 순열에 포함된 원소의 인덱스 : int*/

const input = `4 2`;
const [n, m] = input.split(' ').map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i); // arr = [1, 2, 3, 4]
let visited = new Array(n).fill(false); // [false, false, false, false]
let selected = [];
let answer = '';

function dfs(arr, depth) {
  // 순열 확인
  if (depth == m) {
    let result = [];
    for (i of selected) result.push(arr[i]);
    for (x of result) answer += x + ' ';
    answer += '\n';
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop(i);
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);
