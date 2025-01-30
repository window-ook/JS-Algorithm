/** 피보나치 - 난이도 ⭐️⭐️ */
const fs = `4
100
200
12345
1003`;
const input = fs.split('\n');
let testCase = Number(input[0]);
(fibo = []), fibo.push(0), fibo.push(1);
while (fibo[fibo.length - 1] < 1e9)
  fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);

for (let tc = 1; tc <= testCase; tc++) {
  let result = [];
  let n = Number(input[tc]);
  let i = fibo.length - 1;
  while (n > 0) {
    if (n >= fibo[i]) {
      n -= fibo[i];
      result.push(fibo[i]);
    }
    i--;
  }
  let answer = '';
  for (let i = result.length - 1; i >= 0; i--) answer += result[i] + ' ';
  console.log(answer);
}
