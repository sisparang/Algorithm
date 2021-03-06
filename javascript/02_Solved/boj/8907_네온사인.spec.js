// https://www.acmicpc.net/problem/8907 문제의 입력을 수정한 내용입니다.

/*
[문제]
시흠이는 최근에 레스토랑 "삼각형"을 오픈했고, 시흠이는 레스토랑을 상징하는 네온 사인을 주문했다.
네온 사인은 총 N개의 꼭짓점이 원의 둘레를 따라 찍혀져 있다. 그리고, 총 N * (N-1) / 2개의 야광 튜브가 꼭짓점을 연결하고 있다. 야광 튜브는 두 가지 색(빨간색과 파란색)이 있다.
시흠이는 한 번에 한 삼각형만 불을 밝히려고 한다. 이때, 삼각형의 모든 변은 색상이 같아야 하고, 꼭짓점이 서로 이어져 있어야 한다. 그는 이러한 단색 삼각형의 개수를 알려고 한다.
예를 들어, 아래 네온 사인에는 단색 삼각형이 두 개 있다. (1, 3, 5)와 (2, 3, 4)
네온 사인의 꼭짓점의 수와 각 야광 튜브의 색상이 주어졌을 때, 단색 삼각형의 개수를 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에는 테스트 케이스의 수 T가 주어진다.
각 테스트 케이스의 첫째 줄에는 꼭짓점의 개수 N(3 ≤ N ≤ 1,000)이 주어진다.
다음 N-1개의 각 야광 튜브의 색이 주어진다.
이 줄의 i번째 줄에는 꼭짓점 i와 연결된 튜브의 색상이 i+1번 꼭짓점과 연결된 튜브부터 N번까지 순서대로 주어진다.
빨간색은 1, 파란색은 0으로 주어진다.

[출력]
각 테스트 케이스에 대해서 단색 삼각형의 개수를 출력한다.
*/

/**
 * 1. 단색 삼각형의 수 = 모든 삼각형의 수 - 두 개의 색이 있는 삼각형의 수
 *
 * @param {*} k
 * @param {*} arr
 * @returns
 */
function solution(k, arr) {
  return 0;
}

/**
 * ========================================================
 * @Title       : 8907_네온사인
 * @Path        : javascript\02_Solved\boj\8907_네온사인.spec.js
 * @Description :
 * @Date        : 2021-07-11 22:09:56
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('8907_네온사인', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의
    let k = 5;
    let arr = [[1, 1, 0, 1], [0, 0, 0], [0, 1][1]];
    const result = 2;

    // 테스트 결과 정의
    expect(solution(k, arr)).toEqual(result);
  });

  // 테스트 케이스명
  it('기본2', () => {
    // 파라미터 정의
    let k = 5;
    let arr = [[1, 1, 1, 1], [0, 0, 1], [0, 1][1]];
    const result = 4;

    // 테스트 결과 정의
    expect(solution(k, arr)).toEqual(result);
  });
});
