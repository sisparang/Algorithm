/*=======================================================================================
[Special Sort(구글 인터뷰)]
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다. 
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다.
또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
=======================================================================================*/

// ▣ 입력설명
// 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진다.
// 숫자 0은 입력되지 않는다.

// ▣ 출력설명
// 정렬된 결과를 출력한다.

// ▣ 입력예제 1
// 8
// 1 2 3 -3 -2 5 6 -6

// ▣ 출력예제 1
// -3 -2 -6 1 2 3 5 6

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && 0 < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

/**
 * ========================================================
 * @Title       : 03_Special_Sort
 * @Path        : javascript\02_Solved\inflearn\g.sortingANDgreedANDdecision\03_Special_Sort.spec.js
 * @Description :
 * @Date        : 2021-07-12 21:52:41
 * --------------------------------------------------------
 * @Author      : Inseong-so(https://github.com/inseong-so)
 * ========================================================
 */
describe('03_Special_Sort', () => {
  // 테스트 케이스명
  it('기본1', () => {
    // 파라미터 정의
    let arr = [1, 2, 3, -3, -2, 5, 6, -6];
    const result = [-3, -2, -6, 1, 2, 3, 5, 6];

    // 테스트 결과 정의
    expect(solution(arr)).toEqual(result);
  });
});
