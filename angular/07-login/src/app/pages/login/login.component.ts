import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.module';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  remember: boolean = false;

  constructor(
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email') || '';
      this.remember = true;
    }
  }

  login(form: NgForm) {

    if (form.invalid) return;

    Swal.fire({
      allowOutsideClick: false,
      icon: 'warning',
      text: 'Wait, please...'
    });

    Swal.showLoading();

    this._authService.login(this.user).subscribe(response => {
      Swal.close();

      if (this.remember) {
        localStorage.setItem('email', this.user.email);
      }

      this.router.navigate(['home']);
    }, err => {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        title: 'Authentication error',
        text: err.error.error.message
      });
    });

  }

}
