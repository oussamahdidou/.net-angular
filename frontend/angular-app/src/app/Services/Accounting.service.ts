import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  loginForm: string = '1141441';
  constructor(private request: HttpClient) {}
  //Register(user: RegisterVM): Observable<any> {}
  AllOperations(): Observable<any> {
    const token = localStorage.getItem('jwt');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.request.get(
      'https://localhost:7270/api/Operation/GetOperations',

      {
        headers: headers,
        observe: 'response',
        responseType: 'text', // Set the response type to 'text'
      }
    );
  }
}
