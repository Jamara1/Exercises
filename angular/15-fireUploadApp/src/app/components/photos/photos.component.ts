import { Component, OnInit } from '@angular/core';

import { Image } from 'src/app/interfaces/image.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: [],
})
export class PhotosComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Image>;
  images: Image[] = [];
  loading: boolean = true;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Image>('image');

    setTimeout(() => {
      this.itemsCollection.valueChanges().subscribe(response => {
        this.images = response;
      });
      this.loading = false;
    }, 1500);
  }

  ngOnInit(): void {

  }

  addItem(item: Image) {
    this.itemsCollection.add(item);
  }
}
