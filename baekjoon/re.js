function dfs(oper, depth) {
  if (depth == n - 1) {
    let str = '';
    for (let i = 0; i < n - 1; i++) str += arr[i] + oper[i];
    str += arr[n - 1];
    current = eval(str.split(' ').join(''));
    if (current == 0) console.log(str);
    return;
  }

  for (a of [' ', '+', '-']) {
    oper.push(a);
    dfs(oper, depth + 1);
    oper.pop();
  }
}

const fs = `2
3
7`;
const input = fs.split('\n');
let testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]);
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  dfs([], 0);
  console.log();
}
