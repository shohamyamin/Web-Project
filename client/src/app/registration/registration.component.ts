import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
  };
  errorMessege = '';

  validatePass: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    // check if the login fields are empty
    if (
      this.user.username === '' ||
      this.user.password === '' ||
      this.validatePass == ''
    ) {
      this.errorMessege = 'The fields are required';
    } else if (this.validatePass != this.user.password) {
      this.errorMessege = 'Passwords not match';
    } else {
      this.authService
        .register(this.user)
        .pipe(
          tap((response) => {
            this.errorMessege = '';
            // redirect to home screen;
            this.router.navigateByUrl('/login');
          }),
          catchError((err) => {
            // show error
            this.errorMessege = 'somthing went worng';
            return NEVER;
          })
        )
        .subscribe();
    }
  }
}
