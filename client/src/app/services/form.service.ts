import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSchema, Formulaire } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  public AddFormAsync(form: FormSchema): Observable<FormSchema> {
    return this.http.post<FormSchema>(`${environment.apiUrl}/api/form`, form, {
      headers: this.authService.headers,
    });
  }
  public GetFormsAsync(): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(`${environment.apiUrl}/api/form`, {
      headers: this.authService.headers,
    });
  }
  public GetFormByIdAsync(id: string): Observable<Formulaire> {
    return this.http.get<Formulaire>(`${environment.apiUrl}/api/form/${id}`, {
      headers: this.authService.headers,
    });
  }
}
