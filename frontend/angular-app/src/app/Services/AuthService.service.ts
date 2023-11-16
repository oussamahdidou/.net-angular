import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterVM } from '../Models/RegisterVM';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private request: HttpClient) {}
  //Register(user: RegisterVM): Observable<any> {}
  loginService(loginForm: any): Observable<any> {
    return this.request.post(
      'https://localhost:7270/api/authentication/login',
      loginForm,
      {
        observe: 'response',
        responseType: 'text', // Set the response type to 'text'
      }
    );
  }
  RegisterService(loginForm: any): Observable<any> {
    return this.request.post(
      'https://localhost:7270/api/authentication/registeration',
      loginForm
    );
  }
  jwtHelper = new JwtHelperService();

  IsComptable() {
    const token = localStorage.getItem('jwt');
    if (token != null) {
      // Get the JWT from storage
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken); // Log the decoded token to inspect its structure

      // Check the user's roles
      if (decodedToken && decodedToken.role == 'Comptable') {
        console.log(decodedToken.role);
        // User is an admin, allow access to the route
        return true;
      } else {
        console.log(decodedToken.role);

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
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken); // Log the decoded token to inspect its structure

      // Check the user's roles
      if (decodedToken && decodedToken.role == 'Operateur') {
        console.log(decodedToken.role);
        // User is an admin, allow access to the route
        return true;
      } else {
        console.log(decodedToken.role);

        // User is not authorized, deny access to the route
        return false;
      }
    }

    return false;
  }
}
