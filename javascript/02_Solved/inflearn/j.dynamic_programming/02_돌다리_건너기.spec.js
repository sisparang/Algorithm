/*=======================================================================================
[돌다리 건너기]
철수는 학교에 가는데 개울을 만났습니다. 개울은 N개의 돌로 다리를 만들어 놓았습니다. 철
수는 돌 다리를 건널 때 한 번에 한 칸이나 두 칸, 또는 세 칸씩 건너뛰면서 돌다리를 건널 수 있습니다. 
철수가 개울을 건너는 방법은 몇 가지일까요?
=======================================================================================*/

// ▣ 입력설명
// 첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 개울을 건너는 방법의 수를 출력합니다.

// ▣ 입력예제 1
// 7

// ▣ 출력예제 1
// 34

function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;
  dy[3] = 4;

  for (let i = 4; i <= n + 1; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }

  return dy[n + 1];
}

/**
 * ========================================================
 * @Title       : 02_돌다리_건너기
 * @Path        : javascript\02_Solved\inflearn\j.dynamic_programming\02_돌다리_건너기.spec.js
 * @Description : 동적 계획법
 * @Date        : 2021-07-06 16:15:53
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('02_돌다리_건너기', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의
    let k = 7;
    const result = 34;

    // 테스트 결과 정의
    expect(solution(k)).toEqual(result);
  });
});
