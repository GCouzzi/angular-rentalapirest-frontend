import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AppApiError } from '../models/app-api-error.model';
import { AutomovelDTO, AutomovelResponseDTO } from '../models/automovel.model';
import { Page } from '../models/page.model';

@Injectable({ providedIn: 'root' })
export class AutomovelService {

  private baseUrl = 'http://localhost:8080/api/v1/automoveis'

  constructor(private readonly _http: HttpClient) { }

  register(automovel: AutomovelDTO): Observable<AutomovelResponseDTO> {
    return this._http.post<AutomovelResponseDTO>(`${this.baseUrl}`, automovel)
      .pipe(catchError((err) => this.handleError(err)))
  }

  findByPlaca(placa: string): Observable<AutomovelResponseDTO> {
    const encodedPlaca = encodeURIComponent(placa);
    return this._http.get<AutomovelResponseDTO>(`${this.baseUrl}/placa/${encodedPlaca}`)
      .pipe(catchError((err) => this.handleError(err)))
  }

  findAll(page: number = 0, size: number = 10, sortBy: string = 'id', direction: string = 'asc'): Observable<Page<AutomovelResponseDTO>> {

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('direction', direction);

    return this._http.get<Page<AutomovelResponseDTO>>(`${this.baseUrl}`, { params })
      .pipe(catchError((err) => this.handleError(err)));;
  }

  deleteByPlaca(placa: string): Observable<void> {
    const encodedPlaca = encodeURIComponent(placa);
    return this._http.delete<void>(`${this.baseUrl}/placa/${encodedPlaca}`)
      .pipe(catchError((err) => this.handleError(err)))
  }

  private handleError(err: HttpErrorResponse) {
    let msg = err.error?.message || 'Erro inesperado.';
    return throwError(() => new AppApiError(msg, err.status));
  }

}
