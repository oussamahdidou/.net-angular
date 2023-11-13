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

  jwtHelper = new JwtHelperService();

  IsComptable() {
    const token = localStorage.getItem('jwt');
    if (token != null) {
      // Get the JWT from storage
      const decodedToken = this.jwtHelper.decodeToken(token); // Decode the JWT
      // Check the user's roles
      if (decodedToken.roles.includes('Comptable')) {
        // User is an admin, allow access to the route
        return true;
      } else {
        // User is not authorized, deny access to the route
        return false;
      }
    }
    return false;
  }
  IsOperator() {
    const token = localStorage.getItem('jwt');
    if (token != null) {
      // Get the JWT from storage
      const decodedToken = this.jwtHelper.decodeToken(token); // Decode the JWT
      // Check the user's roles
      if (decodedToken.roles.includes('Operateur')) {
        // User is an admin, allow access to the route
        return true;
      } else {
        // User is not authorized, deny access to the route
        return false;
      }
    }
    return false;
  }
}
