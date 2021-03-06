/*=======================================================================================
[ 이진트리 넓이우선탐색(BFS) ]
아래 그림과 같은 이진트리를 넓이우선탐색하라.
=======================================================================================*/

//       1
//   2       3
// 4   5   6   7

// 넓이 우선 탐색 : 1 2 3 4 5 6 7

// 큐를 사용하여 해결
// 상태 트리를 레벨 탐색하며 최단거리에 사용된다.
function solution() {
  let answer = '';

  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 14) continue;
      queue.push(nv);
    }
  }

  return answer;
}

/**
 * ========================================================
 * @Title       : 04_이진트리_넓이우선탐색(BFS)
 * @Path        : javascript\02_Solved\inflearn\i.graph\04_이진트리_넓이우선탐색(BFS).spec.js
 * @Description : 그래프 자료구조 - BFS 알고리즘
 * @Date        : 2021-07-06 16:07:49
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('04_이진트리_넓이우선탐색(BFS)', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의
    const result = [1, 2, 3, 4, 5, 6, 7];

    // 테스트 결과 정의
    expect(solution()).toEqual(result);
  });
});
