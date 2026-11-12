import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; 

@Component({
  imports: [NgIf],
  selector: 'app-conditional-rendering-exercice',
  styleUrl: './conditional-rendering-exercice.css',
  templateUrl: './conditional-rendering-exercice.html',
})
export class ConditionalRenderingExercice {

  listFriendsInputText : string = "";
  listFriendsAuth : boolean = false ;

  // constructor() {
  //   setTimeout(() => {
  //     this.listFriendsAuth = false;
  //   }, 3000);
  // }

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }

  onAddingFriends(): void {
  this.listFriendsAuth = true ;
  
  }
}
