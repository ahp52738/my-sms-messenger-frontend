import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private apiUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) {}

  sendMessage(message: { content: string; to: string }): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
