import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppApiError } from '../models/app-api-error.model';
import { throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AluguelService {

private baseUrl = 'http://localhost:8080/api/v1/alugueis'

  constructor(private readonly _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    let msg = err.error?.message || 'Erro inesperado.';
    return throwError(() => new AppApiError(msg, err.status));
  }
}
