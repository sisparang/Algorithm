/*=======================================================================================
[ 경로 탐색(인접리스트) ]
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램을 작성하라.
아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 
1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5
총 6 가지이다.
=======================================================================================*/

// ▣ 입력설명
// 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연결정보가 주어진다.

// ▣ 출력설명
// 총 가지수를 출력한다.

// ▣ 입력예제 1
// 5 9
// 1 2
// 1 3
// 1 4
// 2 1
// 2 3
// 2 5
// 3 4
// 4 2
// 4 5

// ▣ 출력예제 1
// 6

// 노드(정점)의 갯수가 많다면 인접리스트 방식으로 해결해야한다.
function solution(n, arr) {
  let answer = 0;

  // 1부터 시작하므로n +1
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v, n) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        // 갈 수 있는 방향이고, 방문한 적이 없다면
        // v 정점의 번호로 무조건 가는 것만 체크함
        if (check[graph[v][i]] === 0) {
          // visited
          check[graph[v][i]] = 1;
          // path.push(i); // 테스트
          // 재귀
          DFS(graph[v][i], n);
          // backtracking
          check[graph[v][i]] = 0;
          // path.pop(); // 테스트
        }
      }
    }
  }
  // path.push(1); // 테스트
  check[1] = 1; // 1번에서 시작하므로 무조건 방문했다고 표시를 해주어야 함
  DFS(1, n);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
