let file = `8
1
1.0
2.0
2.10
2.1
2.100
1.11
1.3`;
let input = file.split('\n');
let n = Number(input[0]);
// .을 기준으로 비교를 각각 하는거임 -> 좌측 숫자로 오름차순 정렬, 우측 숫자로 다시 오름차순 정렬
// right는 없을 수도 있음
// arr을 인덱스별로 left, right로 나눠서 저장하기

let arr = input.slice(1).map((x) => {
  let [left, right] = x.split('.'); // 소수점 기준으로 분리
  return { left: Number(left), right: right ? Number(right) : -1 }; // right가 없으면 -1로 처리
});

arr.sort((a, b) => {
  if (a.left != b.left) return a.left - b.left;
  return a.right - b.right;
});

for (let x of arr) {
  if (x.right < 0) console.log(`${x.left} `);
  else console.log(`${x.left}.${x.right}`);
}
