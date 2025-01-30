/** 좌표 압축 - 난이도 ⭐️⭐️ */
const fs = `5
2 4 -10 4 -9`;

let input = fs.split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

let myMap = new Map();
for (i = 0; i < uniqueArr.length; i++) {
  myMap.set(uniqueArr[i], i);
}

answer = '';
for (x of arr) answer += myMap.get(x) + ' ';
console.log(answer);
