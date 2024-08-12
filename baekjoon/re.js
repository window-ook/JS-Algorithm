// 0 만들기
//   1부터 n까지의 숫자들의 합이 0이 되도록 만들어야 함
//   - dfs 함수 만들기
//   - 반복문으로 각 testCase에 해당하는 n을 dfs 실행한 값을 출력하기
//   - 연산자를 중복해서 사용가능하기 때문에 중복순열 : visited 사용 X

// 테스트 케이스 개수
// 1 ~ 3 수열
// 1 ~ 7 수열
const fs = `2
3 
7`;
const input = fs.split('\n');
const testCase = Number(input[0]);
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[tc]);
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i); // 현재 테스트 케이스에 필요한 수열 만들기
  dfs([], 0);
  console.log(); // 1개 테스트케이스 완료 후 줄바꿈
}

function dfs(result, depth) {
  //  n-1이 인덱스와 맞음
  if (depth == n - 1) {
    let str = '';
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i]; // 숫자 + 연산자를 문자열에 붙임
    str += arr[n - 1] + ''; // 수열의 마지막 숫자도 더해줘야함
    current = eval(str.split(' ').join('')); // 문자열로 표현된 수식을 계산해서 결과 구하기
    if (current == 0) console.log(str); // 수식의 결과가 0이면 출력;
    return; // 루프 종료
  }

  // 연산자는 이어붙이기, +, - 3가지가 존재
  for (let x of [' ', '+', '-']) {
    result.push(x);
    dfs(result, depth + 1);
    result.pop();
  }
}
