package com.gledson.racecondition;

public class Application {
	public static void main(String[] args) throws InterruptedException {
		var longWrapper = new LongWrapper(0L);

		Runnable runnable = () -> {
			for (int i = 0; i < 1000; i++) {
				longWrapper.incrementValue();
			}
		};

		var threads = new Thread[1000];
		for (int i = 0; i < threads.length; i++) {
			threads[i] = new Thread(runnable);
			threads[i].start();
		}

		for (int i = 0; i < threads.length; i++) {
			threads[i].join();
		}

		System.out.println("Value = " + longWrapper.getValue());
	}
}
