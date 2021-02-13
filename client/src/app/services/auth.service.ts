import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = environment.apiUrl;
  isAuthenticated = false;
  username: string;
  constructor(private http: HttpClient) {}
  logout() {
    if (this.isAuthenticated) {
      this.isAuthenticated = false;
      this.username;
    }
  }
  login(user: User) {
    console.log('logbefoe', user);

    return this.http.post(`${this.apiURL}/login`, user).pipe(
      tap((response) => {
        this.isAuthenticated = true;
        this.username = user.username;
      })
    );
  }
}
