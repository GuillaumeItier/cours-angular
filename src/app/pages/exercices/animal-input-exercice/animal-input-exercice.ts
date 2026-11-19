import { Component, signal } from '@angular/core';
import type { Animal } from '../../../models/animal.model';
import { AnimalCard } from '../../../components/animal-card/animal-card';

@Component({
  imports: [AnimalCard],
  selector: 'app-animal-input-exercice',
  styleUrl: './animal-input-exercice.css',
  templateUrl: './animal-input-exercice.html',
})
export class AnimalInputExercice {
  readonly animals = signal<Animal[]>([
    { id: 1, name: 'Rex', species: 'Chien', age: 3, energy: 85, isAdopted: false },
    { id: 2, name: 'Pixel', species: 'Chat', age: 2, energy: 45, isAdopted: true },
    { id: 3, name: 'Noisette', species: 'Lapin', age: 1, energy: 30, isAdopted: false },
    { id: 4, name: 'Kiwi', species: 'Oiseau', age: 4, energy: 70, isAdopted: false },
    { id: 5, name: 'Luna', species: 'Chat', age: 6, energy: 20, isAdopted: false },
    { id: 6, name: 'Oslo', species: 'Chien', age: 1, energy: 95, isAdopted: true },
]);



}
