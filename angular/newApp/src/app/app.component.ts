import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Chat { message: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chats: Observable<Chat[] | any[]>;

  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chats').valueChanges();
  }
}
