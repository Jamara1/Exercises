import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Chat } from '../interfaces/chat.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Chat>;
  public chats: Chat[];
  public user: any = {};

  constructor(
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    auth.authState.subscribe((user: any) => {

      if (!user) {
        return;
      }

      this.user.name = user.displayName;
      this.user.uuid = user.uid;
    });
  }

  login(supplier: string) {
    if (supplier === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.user = {};
    this.auth.signOut();
  }

  loadMessage() {
    this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.orderBy('date', 'desc').limit(5));

    return this.itemsCollection.valueChanges().pipe(
      map((messages: Chat[]) => {
        this.chats = [];

        messages.forEach(message => {
          this.chats.unshift(message);
        });

        return this.chats;
      })
    );
  }

  addMessage(text: string) {

    let message: Chat = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uuid: this.user.uuid
    }

    return this.itemsCollection.add(message);

  }

}
