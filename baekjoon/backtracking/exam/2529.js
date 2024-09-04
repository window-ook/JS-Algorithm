/** 부등호 - 난이도 ⭐️⭐️⭐️
  
  1. 아이디어

  2. 필요한 자료구조 
  - visited [] : 방문 처리 
  - result [] : 인덱스 저장 */
const fs = `2
< >`;
const input = fs.split('\n');
const k = Number(input[0]); // 부등호 개수
let arr = input[1].split(' '); // 부등호
let visited = new Array(10).fill(false);
let result = [];
let current = ''; // 부등호식을 이루는 숫자 조합
let first = ''; // 최솟값

function dfs(depth) {
  // K + 1 = 3, 0 ~ 2면 숫자 3개
  if (depth == k + 1) {
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] == '<') {
        if (result[i] > result[i + 1]) check = false; // <인데 좌항이 더 크면 false
      } else if (arr[i] == '>') {
        if (result[i] < result[i + 1]) check = false; // >인데 우항이 더 크면 false
      }
    }
    // 부등호 식을 만들었으면
    if (check) {
      current = '';
      for (let i of result) current += i + ''; // 숫자 추가하기
      if (first == '') first = current; // 첫번째 조합이 최솟값
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue; // 방문한 곳은 통과
    visited[i] = true; // 현재 노드 방문 처리
    result.push(i); // 현재 인덱스 저장
    dfs(depth + 1); // dfs
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(current + '\n' + first);
