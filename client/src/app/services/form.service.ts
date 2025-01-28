import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSchema } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  public AddFormAsync(form: FormSchema): Observable<FormSchema> {
    return this.http.post<FormSchema>(`${environment.apiUrl}/api/form`, form);
  }
}
