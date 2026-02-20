import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { AppApiError } from '../models/app-api-error.model';
import { UsuarioResponseDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8080/api/v1/usuarios';

  constructor(private readonly _http: HttpClient) { }

  register(credentials: RegisterRequest): Observable<UsuarioResponseDTO> {
    return this._http.post<UsuarioResponseDTO>(`${this.baseUrl}`, credentials)
    .pipe(catchError((err) => this.handleError(err)))
  }

  private handleError(err: HttpErrorResponse) {
    let msg = err.error?.message || 'Erro inesperado.';
    return throwError(() => new AppApiError(msg, err.status));
  }
}
