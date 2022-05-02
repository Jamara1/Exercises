import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: string | null): string {

    if (value) {
      return `https://image.tmdb.org/t/p/w500${ value }`;
    } else {
      return './assets/no-image.jpg';
    }

  }

}
