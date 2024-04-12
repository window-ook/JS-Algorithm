// 신입 사원

const fs = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`;
let input = fs.split('\n');

let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]); // 첫번째 순위를 기준으로

  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }

  console.log(count);
  line += n + 1;
}
