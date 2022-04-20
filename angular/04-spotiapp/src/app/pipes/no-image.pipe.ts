import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any[]): string {

    if (!value) {
      return 'assets/image/noimage.png';
    }

    if (value.length > 0) {
      return value[0].url;
    } else {
      return 'assets/image/noimage.png';
    }
  }

}
