import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  /**
   * Logs in the user and stores authentication tokens.
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign_in`, { email, password }, { observe: 'response' })
      .pipe(
        tap(response => {
          const headers = response.headers;
          this.storeAuthTokens(headers);
          console.log("Login successful!");
        })
      );
  }

  /**
   * Logs out the user and removes tokens.
   */
  logout(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/sign_out`, { headers })
      .pipe(
        tap(() => {
          this.clearAuthTokens();
          console.log("Logged out successfully!");
        })
      );
  }

  /**
   * Checks if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('access-token');
  }

  /**
   * Stores authentication tokens from response headers.
   */
  private storeAuthTokens(headers: HttpHeaders): void {
    if (headers.get('access-token')) {
      localStorage.setItem('access-token', headers.get('access-token') || '');
      localStorage.setItem('client', headers.get('client') || '');
      localStorage.setItem('uid', headers.get('uid') || '');
    }
  }

  /**
   * Clears authentication tokens from local storage.
   */
  private clearAuthTokens(): void {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
  }

  /**
   * Gets authentication headers for API requests.
   */
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'access-token': localStorage.getItem('access-token') || '',
      'client': localStorage.getItem('client') || '',
      'uid': localStorage.getItem('uid') || ''
    });
  }
}
