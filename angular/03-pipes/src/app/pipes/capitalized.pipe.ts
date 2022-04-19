import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    const lower = value.toLocaleLowerCase();
    let separated = lower.split(' ');

    if (all) {
      separated = separated.map( separate => {
        return separate[0].toUpperCase() + separate.substring(1);
      });

    } else {
      separated[0] = separated[0][0].toLocaleUpperCase() + separated[0].substring(1);
    }

    return separated.join(' ');
  }

}
