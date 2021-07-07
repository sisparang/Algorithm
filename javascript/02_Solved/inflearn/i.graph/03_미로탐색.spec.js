/*=======================================================================================
[ 미로탐색(DFS) ]
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하라.
출발점은 격자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
격자판의 1은 벽이고, 0은 통로이다. 격자판의 움직임은 상하좌우로만 움직인다.
미로가 다음과 같다면
출발 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 도착
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
=======================================================================================*/

// ▣ 입력설명
// 7*7 격자판의 정보가 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 경로의 가지수를 출력한다.

// ▣ 입력예제 1
// 0 0 0 0 0 0 0
// 0 1 1 1 1 1 0
// 0 0 0 1 0 0 0
// 1 1 0 1 0 1 1
// 1 1 0 0 0 0 1
// 1 1 0 1 1 0 0
// 1 0 0 0 0 0 0

// ▣ 출력예제 1
// 8

function solution(board) {
  let answer = 0;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let lx = board.length - 1;
  let ly = board[board.length - 1].length - 1;

  function DFS(x, y) {
    if (x === lx && y === ly) {
      answer++;
    } else {
      for (let k = 0; k < 4; k++) {
        let s1 = x + dx[k];
        let s2 = y + dy[k];
        if (s1 >= 0 && s1 <= lx && s2 >= 0 && s2 <= ly && board[s1][s2] === 0) {
          board[s1][s2] = 1;
          DFS(s1, s2);
          board[s1][s2] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

/**
 * ========================================================
 * @Title       : 03_미로탐색
 * @Path        : javascript\02_Solved\inflearn\i.graph\03_미로탐색.spec.js
 * @Description : 그래프 자료구조 - DFS 알고리즘
 * @Date        : 2021-07-06 16:07:28
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('03_미로탐색', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의

    let arr = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ];
    const result = 8;

    // 테스트 결과 정의
    expect(solution(arr)).toEqual(result);
  });
});
