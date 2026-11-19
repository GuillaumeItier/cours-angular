import { Component, input , computed } from '@angular/core';
import type { Species } from '../../models/animal.model';

const EMOJIS: Record<Species, string> = {
  Chien: '🐶',
  Chat: '🐱',
  Lapin: '🐰',
  Oiseau: '🦜',
};

@Component({
  imports: [],
  selector: 'app-animal-card',
  styleUrl: './animal-card.css',
  templateUrl: './animal-card.html',
})
export class AnimalCard {
  readonly name = input.required<string>();
  readonly species = input.required<Species>();
  readonly age = input<number>(0);
  readonly energy = input<number>(50);
  readonly isAdopted = input<boolean>(false);

  readonly emoji = computed(() => EMOJIS[this.species()]);

  readonly ageUnit = computed(() => this.age() > 1 ? 'ans' : 'an');
}
