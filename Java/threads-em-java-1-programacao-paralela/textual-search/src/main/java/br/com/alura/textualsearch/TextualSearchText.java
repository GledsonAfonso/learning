package br.com.alura.textualsearch;

import java.io.File;
import java.util.Scanner;

public class TextualSearchText implements Runnable {
  private final String filepath;
  private final String name;

  public TextualSearchText(String filepath, String name) {
    this.filepath = filepath;
    this.name = name;
  }

  @Override
  public void run() {
    try (var scanner = new Scanner(new File(this.filepath))) {
      long lineNumber = 1;
      while (scanner.hasNextLine()) {
        var line = scanner.nextLine();

        if (line.toLowerCase().contains(this.name.toLowerCase())) {
          System.out.println(Thread.currentThread().threadId() + " - " + this.filepath + " - " + lineNumber + " - " + line);
        }

        lineNumber++;
      }
    } catch (Exception exception) {
      throw new RuntimeException(exception);
    }
  }
}
