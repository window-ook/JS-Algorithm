// 단어 정렬

const fs = `13
i
but
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

const input = fs.split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];
arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let x of arr) {
  console.log(x);
}
