import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { AppApiError } from '../models/app-api-error.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private readonly _http: HttpClient) { }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(`${this.baseUrl}`, credentials)
      .pipe(catchError((err) => this.handleError(err)))
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  private handleError(err: HttpErrorResponse) {
    let msg = err.error?.message || 'Erro inesperado.';
    return throwError(() => new AppApiError(msg, err.status));
  }
}
