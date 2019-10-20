# DynamicPrograming - 3day

## 극장 좌석

![](../TheaterSeat.png)
```sh:
어떤 극장의 좌석은 한 줄로 되어 있으며 왼쪽부터 차례대로 1번부터 N번까지 번호가 매겨져 있다.
공연을 보러 온 사람들은 자기의 입장권에 표시되어 있는 좌석에 앉아야 한다.
예를 들어서, 입장권에 5번이 쓰여 있으면 5번 좌석에 앉아야 한다.
단, 자기의 바로 왼쪽 좌석 또는 바로 오른쪽 좌석으로는 자리를 옮길 수 있다.
7번 입장권을 가진 사람은 7번 좌석과 6번 좌석이나 8번 좌석에도 앉을 수 있지만 5번 좌석이나 9번 좌석에는 앉을 수 없다.
그런데 이 극장에는 “VIP 회원”들이 있다. 이 사람들은 반드시 자기 좌석에만 앉아야 하며 옆 좌석으로 자리를 옮길 수 없다.
오늘 공연은 입장권이 매진되어 1번 좌석부터 N번 좌석까지 모든 좌석이 다 팔렸다.
VIP 회원들의 좌석 번호들이 주어졌을 때, 사람들이 좌석에 앉는 서로 다른 방법의 가짓수를 구하는 프로그램을 작성하시오.
예를 들어서, 그림과 같이 좌석이 9개이고, 4번 좌석과 7번 좌석이 VIP석인 경우에 <123456789>는 물론 가능한 배치이다.
또한 <213465789> 와 <132465798> 도 가능한 배치이다. 그러나 <312456789> 와 <123546789> 는 허용되지 않는 배치 방법이다.
```

```sh:
# 입력
	첫째 줄에는 좌석의 개수 N이 입력된다. N은 1 이상 40 이하이다. 둘째 줄에는 고정석의 개수 M이 입력된다.
	M은 0 이상 N 이하이다. 다음 M 개의 줄에는 고정석의 번호가 작은 수부터 큰 수의 순서로 한 줄에 하나씩 입력된다.

# 출력
	주어진 조건을 만족하면서 사람들이 좌석에 앉을 수 있는 방법의 가짓수를 출력한다.
	방법의 가짓수는 2,000,000,000을 넘지 않는다. (2,000,000,000 < 231-1)
```

## 기지국

![](../baseStation.png)
```sh:
KOI 무선통신사는 직선의 통신라인 상에 기지국들을 설치하여 주변의 주요 건물들을 모두 통신범위에 포함 시키고자 한다.
각 기지국의 통신범위는 기지국을 중심으로 하고 밑변이 통신라인과 평행한 정사각형이고, 정사각형의 한 변의 길이를 통신폭이라 한다.
기지국들의 총 설치비용은 각 기지국의 통신폭의 합이고, 기지국의 수와는 무관하다. 
평면상에 주요건물들의 위치가 주어졌을 때, 기지국들을 설치하여 모든 건물을 통신범위에 포함하는 최소비용을 구하는 프로그램을 작성하시오.
통신라인은 x-축과 일치하고 건물들의 위치좌표는 정수이다. 통신라인 상에는 건물이 위치하지 않으며, 모든 건물들의 위치는 서로 다르다.
다음 그림의 예를 보면, 첫 번째 기지국의 위치는 (-2, 0) 이고, 통신폭이 4인 정사각형의 통신범위로 세 개의 건물을 포함한다.
두 번째 기지국의 위치는 (2, 0)이고, 통신폭이 2인 정사각형의 통신범위로 두 개의 건물을 포함한다.
세 번째 기지국의 위치는 (6.5, 0) 이고, 통신폭이 3인 정사각형의 통신범위로 두 개의 건물을 포함한다.
```

```sh:
# 입력
	첫째 줄에는 건물의 개수 N이 주어진다(1 ≤ N ≤ 10,000).
	그 다음 N개의 줄에는 한 줄에 한 건물의 x-좌표와 y-좌표가 빈 칸을 사이에 두고 차례로 주어진다.
	x-좌표와 y-좌표는 절댓값이 1,000,000 이하인 정수이다.

# 출력
	최소의 총 설치비용(기지국의 통신범위를 나타내는 통신폭의 총합)을 첫째 줄에 출력한다.
```