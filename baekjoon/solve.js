// 문제 풀이 파일
// 뎁스 끝까지 도달하기 전에 갔던 인덱스를 방문 처리 배열
let file = `4 2`;
let [n, m] = file.split(' ').map(Number);
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
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0, 0);
console.log(answer);
