import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, filter, interval, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

interface GeneratedNumber {
  id: number;
  value: number;
  label: 'Élevé' | 'Faible';
}

@Component({
  imports: [FormsModule],
  selector: 'app-observables-advanced-exercice',
  styleUrl: './observables-advanced-exercice.css',
  templateUrl: './observables-advanced-exercice.html',
})
export class ObservablesAdvancedExercice {
  private readonly destroyRef = inject(DestroyRef);
  numbers = signal<GeneratedNumber[]>([]);

  filterEven = signal<boolean>(true);
  paused = signal<boolean>(false);
  private nextId = 0;
  private subscription: Subscription | null = null;

 start(): void {
    if (this.subscription) return;

    this.paused.set(false);

    this.subscription = interval(1000)
      .pipe(
        // 1. Transformer chaque tic en nombre aléatoire entre 1 et 100
        map(() => Math.floor(Math.random() * 100) + 1),
        // 2. Filtrer les nombres impairs si le switch est actif
        filter((value) => !this.filterEven() || value % 2 === 0),
        // 3. Enrichir la donnée avec un identifiant unique et une étiquette
        map(
          (value): GeneratedNumber => ({
            id: ++this.nextId,
            value,
            label: value > 50 ? 'Élevé' : 'Faible',
          }),
        ),
        // 4. Sécurité : désabonnement automatique si le composant est détruit
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((newNumber) => {
        // Conserver uniquement les 10 derniers éléments de manière immuable
        this.numbers.update((list) => [...list.slice(-9), newNumber]);
      });
  }

    pauseResume(): void {
    this.paused.update((isPaused) => !isPaused);

    if (this.paused()) {
      this.stopSubscription();
    } else {
      this.start();
    }
  }

    toggleFilter(): void {
    this.filterEven.update((val) => !val);
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
// Si pas de takeUntilDestroyed on stop la souscription à la destruction du composant avec stopSubscription() :
  // ngOnDestroy(): void {
  //   this.stopSubscription();
  // }


}
