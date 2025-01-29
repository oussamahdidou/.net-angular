import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from '../../env/environment';
export interface Login {
  Username: string;
  Password: string;
}
export interface Register {
  username: string;
  emailAddress: string;
  password: string;
}
export interface NewUser {
  username: string;
  email: string;
  token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private _$isLoggedin = new BehaviorSubject(false);
  $isloggedin = this._$isLoggedin.asObservable();

  jwt: string = '';
  token: any;
  headers: any | undefined;

  constructor(private http: HttpClient, private router: Router) {
    if (
      localStorage.getItem('token') &&
      !this.jwtHelper.isTokenExpired(localStorage.getItem('token'))
    ) {
      this._$isLoggedin.next(true);
      this.jwt = localStorage.getItem('token') || '';
      this.token = this.getUser(this.jwt);
      console.log(this.token);

      this.headers = new HttpHeaders().set(
        'Authorization',
        'Bearer ' + this.jwt
      );
    } else {
    }
  }

  getUser(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  logout() {
    localStorage.removeItem('token');
    this._$isLoggedin.next(false);
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<NewUser>(`${environment.apiUrl}/api/Account/Login`, {
        username,
        password,
      })
      .pipe(
        tap<NewUser>(
          (response) => {
            localStorage.setItem('token', response['token']);
            this._$isLoggedin.next(true);
          },
          (error) => {
            console.log(error);
          }
        )
      );
  }

  registeruser(
    userName: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http
      .post<NewUser>(`${environment.apiUrl}/api/Account/Register`, {
        userName,
        email,
        password,
      })
      .pipe(
        tap<NewUser>(
          (response) => {},
          (error) => {
            console.log('error : 1111111' + error.error);
          }
        )
      );
  }
}
