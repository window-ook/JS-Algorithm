const fs = `2
< >`;
const input = fs.split('\n');
const k = Number(input[0]);
const arr = input[1].split(' ');
let result = [];
let visited = new Array(10).fill(false);

function dfs(depth) {
  if (depth == k + 1) {
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] == '<') {
        if (result[i] > result[i + 1]) return false;
      } else if (arr[i] == '>') {
        if (result[i] < result[i + 1]) return false;
      }
    }

    if (check) {
      current = '';
      for (let i of result) current += i;
      if (first == '') first = current;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}
