import { Component } from '@angular/core';
// L'interface 
interface Friend {
  id: number;
  name: string;
  age: number;
  status: string;
  bio: string;
  imgurl: string;

}
@Component({
  imports: [],
  selector: 'app-property-binding-exercice',
  styleUrl: './property-binding-exercice.css',
  templateUrl: './property-binding-exercice.html',
})


export class PropertyBindingExercice {

  // Objet de test qui respecte l'interface Friend
  oneFriend: Friend = {
    id: 1,
    name: 'Steven Cigale',
    age: 25,
    status: 'Online',
    bio: 'Steven Cigale is a French film producer, screenwriter, and director.',
    imgurl: 'https://picsum.photos/400/200',
  };

  //Méthode qui renvoie le statut
  getOneFriendStatus(): string {
    return this.oneFriend.status;
  }
}

