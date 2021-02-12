import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
  };
  errorMessege = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    // check if the login fields are empty
    if (this.user.username === '' || this.user.password === '') {
      this.errorMessege = 'The fields are required';
    } else {
      this.authService
        .login(this.user)
        .pipe(
          tap((response) => {
            // redirect to home screen;
            this.router.navigateByUrl('/dashboard');
          }),
          catchError((err) => {
            // show error
            this.errorMessege = 'UserName/Password incorrect';
            return NEVER;
          })
        )
        .subscribe();
    }
  }
}
