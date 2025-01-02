// 01 타일
// ⭐️⭐️
// n = 1 -> 1개 1
// n = 2 -> 2개 00 11
// n = 3 -> 3개 001 100 111
// n = 4 -> 5개 0000 0011 1001 1100 1111
// n = 5 -> 7개 00001 10000 00111 10011 11001 11100 11111
// n = 6 -> 10개 000000 000011 110000 100001 001111 100111 110011 111001 111100 111111
// 점화식 : f(n) = f(n-1) + f(n-2)
const fs = `4`;
let n = Number(fs);
d = new Array(1000001).fill(0);
d[1] = 1;
d[2] = 2;
for (let i = 3; i <= n; i++) d[i] = (d[i - 1] + d[i - 2]) % 15746;
console.log(d[n]);