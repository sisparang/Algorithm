package practiceCode.cloneTest;

import java.util.Arrays;

public class deepMember implements Cloneable {

	public String name;
	public int age;
	public int[] scores;
	public Car car;

	public deepMember(String name, int age, int[] scores, Car car) {
		this.name = name;
		this.age = age;
		this.scores = scores;
		this.car = car;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		// 먼저 얕은 복사로 name, age를 복제
		deepMember cloned = (deepMember) super.clone();
		// scores의 깊은 복제
		cloned.scores = Arrays.copyOf(this.scores, this.scores.length);
		// car의 깊은 복제
		cloned.car = new Car(this.car.model);
		// 깊은 복제된 Member 객체를 리턴
		return cloned;
	}

	public deepMember getDeepMember() {
		deepMember cloned = null;
		try {
			cloned = (deepMember) clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return cloned;
	}
}
