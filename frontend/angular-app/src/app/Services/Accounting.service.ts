import { HttpClient } from '@angular/common/http';
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
    return this.request.get(
      'https://localhost:7270/api/Operation/GetOperations',

      {
        observe: 'response',
        responseType: 'text', // Set the response type to 'text'
      }
    );
  }
}
