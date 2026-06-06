package com.gledson.runnable.firstrunnable;

public class Application {

	public static void main(String[] args) {
		Runnable runnable = () -> {
			System.out.println("I am running in " + Thread.currentThread().getName());
		};

		Thread thread = new Thread(runnable);
		thread.setName("My thread");
		thread.start(); // this run the runnable code in a different thread
		// thread.run(); // this will run the runnable code in the main thread instead
	}
}
