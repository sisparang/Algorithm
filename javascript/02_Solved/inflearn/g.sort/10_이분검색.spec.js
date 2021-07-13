/*=======================================================================================
[이분검색]
임의의 N개의 숫자가 입력으로 주어진다. N개의 수를 오름차순으로 정렬한 다음
N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하라.
중복값은 존재하지 않는다.
=======================================================================================*/

// ▣ 입력설명
// 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어진다.
// 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어진다.

// ▣ 출력설명
// 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.

// ▣ 입력예제 1
// 8 32
// 23 87 65 12 57 32 99 81

// ▣ 출력예제 1
// 3

// 순차탐색으로는 O(n^2)지만 이분검색(이진탐색)은 O(logn)이다.
function solution(target, arr) {
  let answer = 0;

  // 이분검색은 무조건 정렬이 되어 있어야 한다.
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 중간값을 계산하여 선언
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      answer = mid + 1; // mid는 인덱스 번호이므로 +1을 해야 몇 번째가 된다.
      break;
    }

    if (arr[mid] > target) {
      // 중간값이 타겟보다 크다면 오른쪽(오른차순 기준) 값은 전부 날린다.
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

/**
 * ========================================================
 * @Title       : 10_이분검색
 * @Path        : javascript\02_Solved\inflearn\g.sortingANDgreedANDdecision\10_이분검색.spec.js
 * @Description :
 * @Date        : 2021-07-12 22:04:10
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('10_이분검색', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의
    let k = 32;
    let arr = [23, 87, 65, 12, 57, 32, 99, 81];
    const result = 3;

    // 테스트 결과 정의
    expect(solution(k, arr)).toEqual(result);
  });
});
