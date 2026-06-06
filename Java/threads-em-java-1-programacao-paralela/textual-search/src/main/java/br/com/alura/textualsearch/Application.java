package br.com.alura.textualsearch;

public class Application {
	public static void main(String[] args) {
		var name = "do";
		var firstThread = new Thread(new TextualSearchText("assinaturas1.txt", name));
		var secondThread = new Thread(new TextualSearchText("assinaturas2.txt", name));
		var thirdThread = new Thread(new TextualSearchText("autores.txt", name));

		firstThread.start();
		secondThread.start();
		thirdThread.start();
	}
}
