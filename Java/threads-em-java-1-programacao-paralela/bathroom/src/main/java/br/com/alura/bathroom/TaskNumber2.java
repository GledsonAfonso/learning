package br.com.alura.bathroom;

public class TaskNumber2 implements Runnable {
  private Bathroom bathroom;
  
  public TaskNumber2(Bathroom bathroom) {
    this.bathroom = bathroom;
  }

  @Override
  public void run() {
    bathroom.doNumber2();
  }
}
