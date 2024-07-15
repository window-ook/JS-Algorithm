/** 도영이가 만든 맛있는 음식 - 난이도 ⭐️⭐️⭐️ 
 1. 아이디어 : 가능한 모든 경우의 수를 구하는 풀이
 
 2. 시간 복잡도 : O(2^n)

 3. 자료 구조 : arr[], result[], visited[]
*/

function dfs(depth, start) {
  // 현재 조합 결과에 대해서 계산 =
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    // 인덱스를 하나씩 확인
    for (let i of result) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }
  // 모든 조합 계산하기
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    result.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

const fs = `2
3 8
5 8`;
const input = fs.split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let visited = new Array(n).fill(false);
let result = []; // 조합 결과 배열
let answer = 1e9;

dfs(0, 0);
console.log(answer);
