package br.com.alura.threads;

public class Application {
	public static void main(String[] args) throws InterruptedException {
		System.out.println("Hello world!");

		// This will make the main thread to sleep for 30 seconds, you can use the jconsole to monitor that while its waiting
		Thread.sleep(30000);
	}
}
