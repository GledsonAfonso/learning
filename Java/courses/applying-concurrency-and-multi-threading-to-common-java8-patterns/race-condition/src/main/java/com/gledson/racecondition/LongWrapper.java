package com.gledson.racecondition;

public class LongWrapper {
  private Object key = new Object();
  private long value;

  public LongWrapper(long value) {
    this.value = value;
  }

  public long getValue() {
    return value;
  }

  public void incrementValue() {
    synchronized (key) {
      this.value += 1;
    }
  }
}
