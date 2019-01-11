package algorithm.basic.doit1day;
// 세 정수값의 중앙값을 구하여 나타냄 (모든 조합의 대소관계에 대하여 검증)

class _01_04_Med3 {
	// a, b, c의 중앙값을 구하여 반환
	// 세 값의 대소 관계 중 중앙값을 구하는 함수
	// 세 값의 대소 관계 조합은 13가지 종류가 있음
	// 조합을 나열한 모양이 나무(tree) 형태이므로 결정 트리(decision tree)라고 함
	// 결정 트리는 왼쪽 끝(a >= b)에서 오른쪽으로 이동하고, 조건이 성립하면 위로, 아니라면 아래로 이동
	// 중앙값을 구하는 과정은 퀵 정렬에도 사용됨
	static int med3(int a, int b, int c) {
		if (a >= b)
			if (b >= c)
				return b;
			else if (a <= c)
				return a;
			else
				return c;
		else if (a > c)
			return a;
		else if (b > c)
			return c;
		else
			return b;
	}

	public static void main(String[] args) {
		System.out.println("med3(3,2,1) = " + med3(3, 2, 1)); // a＞b＞c
		System.out.println("med3(3,2,2) = " + med3(3, 2, 2)); // a＞b＝c
		System.out.println("med3(3,1,2) = " + med3(3, 1, 2)); // a＞c＞b
		System.out.println("med3(3,2,3) = " + med3(3, 2, 3)); // a＝c＞b
		System.out.println("med3(2,1,3) = " + med3(2, 1, 3)); // c＞a＞b
		System.out.println("med3(3,3,2) = " + med3(3, 3, 2)); // a＝b＞c
		System.out.println("med3(3,3,3) = " + med3(3, 3, 3)); // a＝b＝c
		System.out.println("med3(2,2,3) = " + med3(2, 2, 3)); // c＞a＝b
		System.out.println("med3(2,3,1) = " + med3(2, 3, 1)); // b＞a＞c
		System.out.println("med3(2,3,2) = " + med3(2, 3, 2)); // b＞a＝c
		System.out.println("med3(1,3,2) = " + med3(1, 3, 2)); // b＞c＞a
		System.out.println("med3(2,3,3) = " + med3(2, 3, 3)); // b＝c＞a
		System.out.println("med3(1,2,3) = " + med3(1, 2, 3)); // c＞b＞a
	}
}
