const fs = `7 1 2 3 4 5 6 7
 8 1 2 3 5 8 13 21 34
 0`;
const input = fs.split('\n');
for (let i = 0; i < input.length; i++) {
  let data = input[i].split(' ').map(Number);
  if (data[0] == 0) break;
  k = data[0];
  arr = data.slice(1);
  selected = [];
  visited = new Array(k).fill(false);
  answer = '';
  dfs(arr, 0, 0);
  console.log(answer);
}

function dfs(arr, depth, start) {
  if (depth == 6) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let i of result) answer += i + ' ';
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
