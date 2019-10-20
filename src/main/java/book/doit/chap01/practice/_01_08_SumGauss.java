package book.doit.chap01.practice;

import java.util.Scanner;
// 가우스 공식에 의해 1, 2, …, n의 합을 구합니다.

class _01_08_SumGauss
{
    public static void main(String[] args)
    {
        Scanner stdIn = new Scanner(System.in);
        
        System.out.println("1부터 n까지의 합을 구합니다.");
        System.out.print("n의 값：");
        int n = stdIn.nextInt();
        
        int sum = (n + 1) * (n / 2) + (n % 2 == 1 ? (n + 1) / 2 : 0); // 합
        
        System.out.println("1부터 " + n + "까지의 합은 " + sum + "입니다.");
    }
}
