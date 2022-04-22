import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, format: string): unknown {
    const momentTime = value * 1000;
    return moment.utc(momentTime).format(format);
  }

}
