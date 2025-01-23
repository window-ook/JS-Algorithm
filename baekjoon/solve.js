function solution(name) {
  // 상하 조작
  const moveUpDown = (char) =>
    Math.min(
      char.charCodeAt(0) - 'A'.charCodeAt(0),
      26 - (char.charCodeAt(0) - 'A'.charCodeAt(0))
    );
  let totalMoves = 0;
  for (let char of name) totalMoves += moveUpDown(char);

  // 좌우 조작
  let minSideMove = name.length - 1; // 단순히 오른쪽으로 이동하는 수
  for (let i = 0; i <= name.length - 1; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === 'A') next++;
    const move = i + name.length - next + Math.min(i, name.length - next);
    minSideMove = Math.min(minSideMove, move);
  }

  return totalMoves + minSideMove;
}

let result = solution('JEROEN');
console.log(result);
