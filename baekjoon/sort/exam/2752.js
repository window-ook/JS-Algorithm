/** 세수정렬 - 난이도 ⭐️
    
    1. 아이디어
    - sort 문제

    2. 자료구조
    - arr [] : 정렬을 위한 배열
 */

const fs = `3 1 2`;
const input = fs.split(' ');
let arr = input.map(Number);
arr.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < arr.length; i++) answer += arr[i] + ' ';
console.log(answer);
