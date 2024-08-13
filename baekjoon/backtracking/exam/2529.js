/** 부등호 - 난이도 ⭐️⭐️⭐️
 1. 아이디어 :

 2. 시간 복잡도 :

 3. 자료구조 :
  visited [] - 방문 처리
  */

const fs = `2
< >`;
const input = fs.split('\n');
const k = Number(input[0]); // 부등호 개수
let arr = input[1].split(' '); // 부등호
let visited = new Array(10).fill(false);
let result = [];
let current = '';
let first = '';

function dfs(depth) {
  // K + 1 = 3, 0 ~ 2면 숫자 3개
  if (depth == k + 1) {
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] == '<') {
        if (result[i] > result[i + 1]) check = false;
      } else if (arr[i] == '>') {
        if (result[i] < result[i + 1]) check = false;
      }
    }

    if (check) {
      current = '';
      for (let i of result) current += i + '';
      if (first == '') first = current;
    }

    return;
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

dfs(0);
console.log(current + '\n' + first);
