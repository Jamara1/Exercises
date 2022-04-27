import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.module';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel();
  remember: boolean = false;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'warning',
      text: 'Wait, please...'
    });

    this._authService.registerUser(this.user).subscribe(response => {
      Swal.close();

      if (this.remember) {
        localStorage.setItem('email', this.user.email);
      }

      this.router.navigate(['home']);
    }, err => {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        title: 'Registration error',
        text: err.error.error.message
      });
    });
  }
}
