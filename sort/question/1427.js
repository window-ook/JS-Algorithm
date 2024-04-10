// 백준 1427 : 소트인사이드, stable sort
const data = `2143`;
let input = data.split('\n')[0];
let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => b - a);
let answer = arr.join('');
console.log(answer);
