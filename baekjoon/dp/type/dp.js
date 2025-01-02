// 종료 조건
// 이미 구한 문제라면 정답 그대로 반환
// 점화식에 따라 답을 구함

d = new Array(100).fill(0);

// 하향식 피보나치
function fibo(x) {
  if (x == 1 || x == 2) return 1;
  if (d[x] != 0) return d[x];

  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
}
console.log(fibo(99));

// 상향식 피보나치
d[1] = 1;
d[2] = 1;
n = 99;
for (let i = 3; i <= n; i++) {
  d[i] = d[i - 1] + d[i - 2];
}
console.log(d[n]);
