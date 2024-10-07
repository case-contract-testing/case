package io.contract_testing.contractcase.client;

import io.contract_testing.contractcase.LogLevel;
import io.grpc.stub.StreamObserver;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

class SendingWorker<T> implements Runnable {

  private final BlockingQueue<SendTask<T>> queue;
  private final StreamObserver<T> requestObserver;
  private final ExecutorService executorService;

  final CountDownLatch finishLatch = new CountDownLatch(1);


  SendingWorker(StreamObserver<T> requestObserver) {
    this.queue = new LinkedBlockingQueue<>();
    this.requestObserver = requestObserver;
    executorService = Executors.newSingleThreadExecutor();
    executorService.submit(this);
  }

  void send(T data, LogLevel logLevel) {
    try {
      queue.put(new SendTask<T>(TaskType.SEND_DATA, data, logLevel));
    } catch (InterruptedException e) {
      throw new RuntimeException("Interrupted while sending: " + e.getMessage(), e);
    }
  }

  public void run() {
    while (true) {
      try {
        var task = queue.take();
        switch (task.type) {
          case SEND_DATA -> {
            MaintainerLog.log(task.logLevel(), " -> Sending: " + task.data);
            requestObserver.onNext(task.data);
          }
          case CLOSE -> {
            requestObserver.onCompleted();
            executorService.shutdown();
            finishLatch.countDown();
            return;
          }
        }
      } catch (InterruptedException e) {
        System.err.println("SendingWorker interrupted while waiting for messages");
      }
    }
  }

  void close() {
    try {
      this.queue.put(new SendTask<T>(TaskType.CLOSE, null, LogLevel.MAINTAINER_DEBUG));
    } catch (InterruptedException e) {
      throw new RuntimeException("SendingWorker interrupted while closing", e);
    }
    try {
      if (!finishLatch.await(5, TimeUnit.SECONDS)) {
        throw new RuntimeException("Timed out waiting for finish");
      }
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
  }

  private record SendTask<T>(TaskType type, T data, LogLevel logLevel) {

  }

  private enum TaskType {
    SEND_DATA,
    CLOSE
  }
}
