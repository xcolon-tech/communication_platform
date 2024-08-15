import { Injectable } from '@angular/core';
import { Chat } from './chat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiGetUrl = 'https://your-api-url/login';
  private apiPostUrl = 'https://your-api-url/login';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(this.apiGetUrl);
  }

  sendMessage(message: string): Observable<any> {
    return this.http.post(this.apiPostUrl, new Chat(message, true));
  }

  // private messages: Chat[] = [
  //   new Chat('Yes', false),
  //   new Chat('Hello', false),
  //   new Chat('Are you there ?', true),
  //   new Chat('Hi', true)
  // ];

  // getMessages(): Chat[] {
  //   return this.messages;
  // }

  // sendMessage(message: string): void {
  //   this.messages.push(new Chat(message, true));
  // }
}
