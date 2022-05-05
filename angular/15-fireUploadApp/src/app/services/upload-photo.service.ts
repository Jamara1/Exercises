import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FileItem } from '../models/file-item.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { Image } from '../interfaces/image.interface';


@Injectable({
  providedIn: 'root',
})
export class UploadPhotoService {
  private FOLDER_IMAGENES: string = 'image';

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  pushFileToStorage(images: FileItem[]) {
    for (const image of images) {
      const filePath = `${this.FOLDER_IMAGENES}/${image.fileName}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, image.file);

      uploadTask.percentageChanges().subscribe((resp: any) => image.progress = resp);

      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe((downloadURL) => {
              this.saveFileData({
                name: image.fileName,
                url: downloadURL
              });
            });
          })
        )
        .subscribe();
    }
  }

  private saveFileData(image: Image) {
    this.afs.collection(`/${this.FOLDER_IMAGENES}`).add(image);
  }
}
