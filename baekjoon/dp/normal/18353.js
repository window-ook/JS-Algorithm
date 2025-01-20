// 병사 배치하기
// ⭐️⭐️
// 가장 긴 증가하는 부분 수열 LIS 또는 가장 긴 감소하는 부분 수열 LDS 이용
let file = `7
15 11 4 8 5 2 4`;
let input = file.split('\n');
let n = Number(input[0]);
let power = input[1].split(' ').map(Number);
let d = Array(n + 1).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    // 내림차순이면 d[i]에 현재 인덱스까지 포함된 숫자의 개수 기록
    if (power[j] > power[i]) d[i] = Math.max(d[i], d[j] + 1);
  }
}
let lis = Math.max(...d);
console.log(n - lis);
