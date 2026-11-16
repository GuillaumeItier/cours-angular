import { Component, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observable-simple-exercice',
  styleUrl: './observable-simple-exercice.css',
  templateUrl: './observable-simple-exercice.html',
})
export class ObservableSimpleExercice {
  numbers = signal<number[]>([]);
  paused = signal<boolean>(false);
  private subscription: Subscription | null = null;

 start(): void {
    if (!this.subscription) {
      const timer = interval(1000);
      this.subscription = timer.subscribe({
        next: () => {
          const random = Math.floor(Math.random() * 100) + 1;
          this.numbers.update((array) => [...array, random]);
        }
      });
    }
  }

    pauseResume(): void {
    this.paused.update((isPaused) => !isPaused);

    if (this.paused()) {
      this.stopSubscription();
    } else {
      this.start();
    }
  }

  stopSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  stop(): void {
    this.stopSubscription();
    this.numbers.set([]);
    this.paused.set(false);
  }

  ngOnDestroy(): void {
    this.stopSubscription();
  }


}
