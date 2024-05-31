// 주유소
// 난이도 ⭐️⭐️

// 최소비용으로 가장 오른쪽 도시로 가는 비용 구하기
// 출발시 1번 주유 후, 그 다음부터 가장 작은 주유소에서 다음으로 가장 작은 주유소 거리까지 주유
const fs = `5
2 3 1 2
5 2 3 1 4`;

let input = fs.split('\n');
let n = Number(input[0]);
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

// 주유비 배열 자체를 변경하기 : 5 2 2 1 1
let minCost = cost[0];
for (let i = 0; i < cost.length; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

// 도로당 주유비의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(answer)); // 마지막 n 제거
