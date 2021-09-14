import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from './../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    private readonly http: HttpClient,
    private readonly common: CommonService
  ) {}

  /**
   * @author helio.souza
   * @description HTTP Get com opções de Error Handler e Token.
   * @param url LINK de acesso ao serviço.
   * @param options Se vai usar o token e se vai usar o show error.
   * @returns Observable T type.
   */
  get<T>(url: string, options = { showError: true }): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError((err) => {
        if (options.showError) {
          this.showError(err);
        }
        throw err;
      })
    );
  }

  /**
   * @author helio.souza
   * @description HTTP Post com opções de Error Handler e Token.
   * @param url LINK de acesso ao serviço.
   * @param body Body da requisição.
   * @param options Se vai usar o token e se vai usar o show error.
   * @returns Observable T type.
   */
  post<T, B>(url: string, body: B, options = { showError: true }): Observable<T> {
    return this.http.post<T>(url, body).pipe(
      catchError((err) => {
        if (options.showError) {
          this.showError(err);
        }
        throw err;
      })
    );
  }

  /**
   * @author helio.souza
   * @description HTTP Put com opções de Error Handler e Token.
   * @param url LINK de acesso ao serviço.
   * @param body Body da requisição.
   * @param options Se vai usar o token e se vai usar o show error.
   * @returns Observable T type.
   */
  put<T, B>(url: string, body: B, options = { showError: true }): Observable<T> {
    return this.http.put<T>(url, body).pipe(
      catchError((err) => {
        if (options.showError) {
          this.showError(err);
        }
        throw err;
      })
    );
  }

  /**
   * @author helio.souza
   * @description HTTP Delete com opções de Error Handler e Token.
   * @param url LINK de acesso ao serviço.
   * @param options Se vai usar o token e se vai usar o show error.
   * @returns Observable T type.
   */
  delete<T>(url: string, options = { showError: true }): Observable<T> {
    return this.http.delete<T>(url).pipe(
      catchError((err) => {
        if (options.showError) {
          this.showError(err);
        }
        throw err;
      })
    );
  }

  /**
   * @author helio.souza
   * @param error HttpErrorResponse.
   */
  showError(error: HttpErrorResponse): void {
    console.log(error);
    if (error.error && error.error.detail) {
      this.common.showAlert('Atenção!', error.error.detail);
    } else if (error.error.error && error.error.message && error.error.statusCode) {
      this.common.showAlert(error.error.error, error.error.message);
    } else if (error.status === 0) {
      this.common.showAlert(error.statusText, error.message);
    } else {
      this.common.showAlert('Atenção!', JSON.stringify(error));
    }
  }
}
