import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any): string {

    if (!value) {
      return 'assets/image/noimage.png';
    }

    if (value.images) {
      if (value.images.length > 0) {
        return value.images[0].url;
      }
    }

    if (value.album.images.length > 0) {
      return value.album.images[0].url;
    } else {
      return 'assets/image/noimage.png';
    }
  }

}
