import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item.model';
import { UploadPhotoService } from 'src/app/services/upload-photo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [],
})
export class UploadComponent implements OnInit {
  isOnElement: boolean = false;
  files: FileItem[] = [];

  constructor(private _uploadPhotoService: UploadPhotoService) {}

  ngOnInit(): void {}

  uploadImages() {
    this._uploadPhotoService.pushFileToStorage(this.files);
  }

  clearFile() {
    this.files = [];
  }
}
