import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ErrorValidate } from '../interfaces/error-validate.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  existUsername(control: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null> {

    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {

        setTimeout(() => {

          if (control.value === 'jamara') {
            resolve({ exist: true });
          } else {
            resolve(null);
          }

        }, 3500);
      });

  }

  noAmara(control: FormControl): ErrorValidate | null {

    if (control.value?.toLowerCase() === 'amara') {

      return {
        noAmara: true
      }
    }

    return null;
  }

  matchPassword(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ IsNotEquals: true });
      }
    }
  }
}
