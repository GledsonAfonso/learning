package br.com.alura.bathroom;

public class Bathroom {
  public void doNumber1() {
    this.usingTheBathroom("doing things quickly", false);
  }
  
  public void doNumber2() {
    this.usingTheBathroom("doing things slowly", true);
  }
  
  private void usingTheBathroom(String action, boolean isSlowAction) {
    var guest = Thread.currentThread().getName();

    System.out.println(guest + " is knocking at the door");

    synchronized(this) {
      System.out.println(guest + " entering the bathroom");
      System.out.println(guest + " " + action);
  
      var timeTaken = 5000;
      if (isSlowAction) {
        timeTaken = 10000;
      }
  
      try {
        Thread.sleep(timeTaken);
      } catch (Exception exception) {
        exception.printStackTrace();
      }
  
      System.out.println(guest + " flushing");
      System.out.println(guest + " washing their hands");
      System.out.println(guest + " exiting the bathroom");
    }
  }
}
