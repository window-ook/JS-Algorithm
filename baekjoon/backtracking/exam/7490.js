/** 0 만들기 - 난이도 ⭐️⭐️⭐️
 
  1. 아이디어 : 
  1부터 n까지의 숫자들의 합이 0이 되도록 만들어야 함
  - dfs 함수 만들기
  - 반복문으로 각 testCase에 해당하는 n을 dfs 실행한 값을 출력하기
  - 연산자를 중복해서 사용가능하기 때문에 중복순열

  2. 시간복잡도 : N^8

  3. 자료구조 :
  n = 각 테스트 케이스별 자연수
  arr[] = 테스트 케이스별 1부터 N까지 수가 저장된 배열
 */

function dfs(result, depth) {
  if (depth == n - 1) {
    let str = ''; // 출력할 수식을 모으는 문자열
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i]; // 수열의 숫자 + 연산자 순서로 수식에 포함시키기
    str += arr[n - 1] + ''; // 수열의 마지막 숫자를 수식 마지막에 위치
    current = eval(str.split(' ').join('')); // eval : 문자열로 된 수식을 계산
    if (current == 0) console.log(str); // 결과가 0이면 수식 출력하기
    return; // 백트래킹
  }

  for (x of [' ', '+', '-']) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}

const fs = `2
  3
  7`;
const input = fs.split('\n');
const testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]); // 각 테스트 케이스별 자연수
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i); // 1부터 N까지의 수열
  dfs([], 0);
  console.log();
}
