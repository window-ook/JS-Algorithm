// 구현

// ascending, descending, mixed
// 7이면 ascending, 0이면 descending, 둘 다 아니면(else) mixed
let file = `1 2 3 4 5 6 7 8`;
let input = file.split('\n');
let gears = input[0].split(' ').map(Number);

function findingGear() {
  let isAscending = 0;
  for (let i = 1; i < gears.length; i++) {
    if (gears[i] > gears[i - 1]) isAscending++;
  }

  if (isAscending === 7) console.log('ascending');
  else if (isAscending === 0) console.log('descending');
  else console.log('mixed');
}

findingGear();
