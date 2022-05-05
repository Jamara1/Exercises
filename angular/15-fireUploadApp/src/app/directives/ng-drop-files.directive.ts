import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FileItem } from '../models/file-item.model';

@Directive({
  selector: '[appNgDropFiles]',
})
export class NgDropFilesDirective {
  @Input() files: FileItem[] = [];
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOn.emit(true);
    this._preventStop(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOn.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {

    const transfer = this._getTransfer(event);

    if (!transfer) {
      return;
    }

    this._extractFiles(transfer.files);

    this._preventStop(event);
    this.mouseOn.emit(false);
  }

  private _getTransfer(event: any) {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  private _extractFiles(fileList: FileList) {
    Object.getOwnPropertyNames(fileList).forEach((property: any) => {
      const fileTemporary = fileList[property];

      if (this._fileCanBeLoaded(fileTemporary)) {
        const newFile = new FileItem(fileTemporary);
        this.files.push(newFile);
      }
    });
  }

  /* Validations */
  private _fileCanBeLoaded(file: File) {
    return (!this._fileAlreadyDropped(file.name) && this._isImage(file.type))
      ? true
      : false;
  }

  private _preventStop(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _fileAlreadyDropped(fileName: string): boolean {

    for ( const file of this.files ) {
      if (file.fileName === fileName) {
        console.log('The file ' + fileName + ' exists');

        return true;
      }
    }

    return false;
  }

  private _isImage(fileType: string): boolean {
    return fileType === '' || fileType === undefined
      ? false
      : fileType.startsWith('image');
  }
}
