import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import { catchError, Observable, pipe, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = 'http://localhost:8080/api/v1/auth';

    constructor(private readonly _http: HttpClient) {}

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this._http.post<LoginResponse>(`${this.baseUrl}`, credentials).pipe(
            catchError(this.handleError)
        );
    }

    setToken(token: string) {
        sessionStorage.setItem('token', token);
    }

    getToken(): string | null {
        return sessionStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    private handleError(error: HttpErrorResponse) {
        let msg = 'Erro desconhecido';
        if (error.error instanceof ErrorEvent) {
            msg = error.error.message;
        } else if (error.error && error.error.message) {
            msg = error.error.message;
        } else {
            msg = `Servidor retornou código ${error.status}`;
        }
        return throwError(() => new Error(msg));
    }
}