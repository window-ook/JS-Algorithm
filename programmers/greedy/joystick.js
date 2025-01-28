function solution(name) {
  // 상하 조작
  // A에서 가까운지 Z에서 가까운지 min으로 판단해서 총 상하이동거리 구하기
  const upDown = (char) =>
    Math.min(
      char.charCodeAt(0) - 'A'.charCodeAt(0), // A에서 해당 글자까지
      26 - (char.charCodeAt(0) - 'A'.charCodeAt(0)) // 해당 글자에서 Z까지
    );

  let totalMoves = 0;
  for (let char of name) totalMoves += upDown(char);

  // 좌우 조작
  // 첫 번째 글자를 기준으로 마지막 전까지 연속된 A면 왼쪽으로 한번만 이동
  let minMove = name.length - 1; // 오른쪽으로만
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === 'A') next++;
    const move = i + name.length - next + Math.min(i, name.length - next);
    minMove = Math.min(minMove, move);
  }

  return totalMoves + minMove;
}

let result = solution('JAN');
console.log(result);
