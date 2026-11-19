import { Component, signal } from '@angular/core';
import type { TpUserModel } from '../../../models/tp-user.model';
import { TpUserActive } from '../../../components/tp-user-active/tp-user-active';
import { TpUserData } from '../../../components/tp-user-data/tp-user-data';

@Component({
  imports: [TpUserActive, TpUserData],
  selector: 'app-component-communication-tp',
  styleUrl: './component-communication-tp.css',
  templateUrl: './component-communication-tp.html',
})
export class ComponentCommunicationTp {
  readonly oneUser = signal<TpUserModel>({ name: 'Goku', age: 35 });

  updateUser(user: TpUserModel): void {
    this.oneUser.set(user);
  }
}
