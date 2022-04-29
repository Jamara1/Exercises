import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [
  ]
})
export class ReactiveComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _validationsService: ValidationsService
  ) {
    this.formGroup = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5), _validationsService.noAmara]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username: ['', , _validationsService.existUsername],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: this.formBuilder.group({
        district: ['', Validators.required],
        city: ['', Validators.required]
      }),
      hobbies: this.formBuilder.array([])
    }, {
      validators: _validationsService.matchPassword('password', 'confirmPassword')
    });

    this.loadDataForm();
    this.createListeners();
  }

  ngOnInit(): void {
  }

  get hobbies() {
    return this.formGroup.get('hobbies') as FormArray;
  }

  get isValidFirstname() {
    return this.formGroup.get('firstname')?.invalid && this.formGroup.get('firstname')?.touched;
  }

  get isValidLastname() {
    return this.formGroup.get('lastname')?.invalid && this.formGroup.get('lastname')?.touched;
  }

  get isValidEmail() {
    return this.formGroup.get('email')?.invalid && this.formGroup.get('email')?.touched;
  }

  get isValidUsername() {
    return this.formGroup.get('username')?.invalid && this.formGroup.get('username')?.touched;
  }

  get isValidPassword() {
    return this.formGroup.get('password')?.invalid && this.formGroup.get('password')?.touched;
  }

  get isValidConfirmPassword() {

    const password = this.formGroup.get('password')?.value;
    const confirmPassword = this.formGroup.get('confirmPassword')?.value;

    return (password === confirmPassword) ? false : true;
  }

  get isValidDistrict() {
    return this.formGroup.get('address.district')?.invalid && this.formGroup.get('address.district')?.touched;
  }

  get isValidCity() {
    return this.formGroup.get('address.city')?.invalid && this.formGroup.get('address.city')?.touched;
  }

  loadDataForm() {
    /*
      * Structure is obligatory this.formGroup.setValue({
      * Structure is not obligatory this.formGroup.reset({
      */
    this.formGroup.reset({
      firstname: 'Johan',
      lastname: 'Amara2',
      email: '7.6amarajohan@gmail.com',
      password: '123',
      confirmPassword: '123',
      address: {
        district: 'San antonio de prado',
        city: 'Medellin'
      }
    });

    ['Eat', 'Sleep'].forEach(value => this.hobbies.push(this.formBuilder.control(value)))
  }

  createListeners() {
    /* this.formGroup.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.formGroup.statusChanges.subscribe(status => {
      console.log(status);
    }); */

    this.formGroup.get('username')?.statusChanges.subscribe(status => {
      console.log(status);
    });
  }

  addHobby() {
    this.hobbies.push(this.formBuilder.control('New element', Validators.required));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  save() {

    if (this.formGroup.invalid) {
      return Object.values(this.formGroup.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => {
            control.markAsTouched();
          });
        }

        console.log(this.formGroup);
        control.markAsTouched();

      });
    }


    this.formGroup.reset();
  }

}
