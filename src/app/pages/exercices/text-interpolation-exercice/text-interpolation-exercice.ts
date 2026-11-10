import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
maxScore: number = 20;
currentScore: number = 15;
percent: number = this.currentScore/this.maxScore*100;

user: { firstName: string; lastName: string; role: string } = {
    firstName: 'Alexandre',
    lastName: 'DUPONT',
    role: 'Dev',
  };
isLoggedIn: boolean = false;

getFullName(): string {
  return `${this.user.firstName} ${this.user.lastName}`;
}

skills: string[] = ['Angular 22', 'TypeScript', 'DaisyUI'];

}

