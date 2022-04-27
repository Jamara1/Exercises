import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.module';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBq2FAlm6g-XEUjGFjl0sG1pjp6Md48XZs';
  private userToken: string = '';

  /*
   * Create new user
   * https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
   */

  /*
   * Log in
   * https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
   */

  constructor(private httpClient: HttpClient) {
    this.readToken();
  }

  registerUser(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    }

    return this.httpClient.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(map((response: any) => {
      this.saveToken(response['idToken']);
      return response;
    }));
  }

  login(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true
    }

    return this.httpClient.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(map((response: any) => {
      this.saveToken(response['idToken']);
      return response;
    }));
  }

  saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expire', today.getTime().toString());
  }

  readToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token') || '';
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expire = Number(localStorage.getItem('expire'));
    let expireDate = new Date();
    expireDate.setTime(expire);

    if (expireDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
