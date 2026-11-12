import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-two-way-data-binding-exercice',
  styleUrl: './two-way-data-binding-exercice.css',
  templateUrl: './two-way-data-binding-exercice.html',
})
export class TwoWayDataBindingExercice {

  oneFriendName: string = 'Steven Cigale';
  oneFriendAge: number = 25;
  oneFriendStatus: string = 'Online';
  oneFriendBio: string =
    'Steven Cigale is a French film producer, screenwriter, and director.';
  oneFriendImgUrl: string = 'https://picsum.photos/seed/picsum/400/200';

  getOneFriendStatus(): string {
    return this.oneFriendStatus;
  }
}
