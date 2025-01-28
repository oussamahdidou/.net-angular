import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormSchema } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from '../../env/environment';
const jwt =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im91c3NhbWFAZXhhbXBsZS5jb20iLCJzdWIiOiJvdXNzYW1hIiwidW5pcXVlX25hbWUiOiJkMmFjYTQ1YS00NGVlLTRiMGQtODcxMi03ZGFmMzNlOTBkOGYiLCJuYmYiOjE3MzgxMDM5NDcsImV4cCI6MTczODcwODc0NywiaWF0IjoxNzM4MTAzOTQ3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDEiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDEifQ.C62mm6wgL9HjyU89PGBZ3zB_iaLm3SGNmOhNs2c_abaYdCKfk-IhknvtDP0rYNVIN8QImkyBBG5nXFmfZ7dE7A';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  public AddFormAsync(form: FormSchema): Observable<FormSchema> {
    return this.http.post<FormSchema>(`${environment.apiUrl}/api/form`, form, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
  }
}
