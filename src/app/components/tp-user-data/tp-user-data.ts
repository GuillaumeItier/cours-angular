import { Component, signal, output } from '@angular/core';
import { TpUserModel } from '../../models/tp-user.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-tp-user-data',
  styleUrl: './tp-user-data.css',
  templateUrl: './tp-user-data.html',
})

export class TpUserData {
  readonly userName = signal<string>('');
  readonly userAge = signal<number | null>(null);

  readonly userDataEmitUpdate = output<TpUserModel>();

  onNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userName.set(input.value);
  }

  onAgeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userAge.set(input.value === '' ? null : Number(input.value));
}

  submitData(event: Event): void {
    event.preventDefault();
    const user: TpUserModel = {
      name: this.userName(),
      age: this.userAge() ?? 0,
    };
    this.userDataEmitUpdate.emit(user);
  }
}
