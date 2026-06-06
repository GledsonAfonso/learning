package br.com.alura.bathroom;

public class Application {
	public static void main(String[] args) {
		var bathroom = new Bathroom();

		var guest1 = new Thread(new TaskNumber1(bathroom), "João");
		var guest2 = new Thread(new TaskNumber2(bathroom), "Pedro");
		var guest3 = new Thread(new TaskNumber1(bathroom), "Maria");
		var guest4 = new Thread(new TaskNumber2(bathroom), "Ana");

		guest1.start();
		guest2.start();
		guest3.start();
		guest4.start();
	}
}
