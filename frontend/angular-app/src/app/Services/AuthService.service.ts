import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterVM } from '../Models/RegisterVM';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private request: HttpClient) {}
  //Register(user: RegisterVM): Observable<any> {}
  LoginService(loginform: any) {
    return this.request.post(
      'https://localhost:44368/api/Account/Login',
      loginform
    );
  }
}
