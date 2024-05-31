// 소트인사이드

const fs = `2143`;
let input = fs.split('\n')[0];
let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => b - a);
let answer = arr.join('');
console.log(answer);
