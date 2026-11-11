import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ShikiPipe } from '../../../pipes/shiki.pipe';

@Component({
  selector: 'app-event-binding-lesson',
  imports: [AsyncPipe, ShikiPipe],
  styleUrl: './event-binding-lesson.css',
  templateUrl: './event-binding-lesson.html',
})
export class EventBindingLesson {
  // Variables d'état pour la démonstration
  username: string = '';
  clickCount: number = 0;

  // Snippets de code pour Shiki
  codeInputHtml: string = `<input (input)="onInputChange($event)" placeholder="Tapez votre nom" />`;
  codeInputTs: string = `onInputChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.username = input.value;
}`;

  codeClickHtml: string = `<button (click)="onButtonClick()">Cliquez-moi !</button>`;
  codeClickTs: string = `onButtonClick(): void {
  this.clickCount++;
}`;

  // Méthodes événementielles
  onInputChange(event: Event): void {
    console.log('Input event:', event);
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  onButtonClick(): void {
    this.clickCount++;
  }
}
