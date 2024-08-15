import { Injectable } from '@angular/core';
import { Chats } from './chats';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatlistService {

  private apiUrl = 'https://your-api-url/login';

  constructor(private http: HttpClient) {}

  getChats(chats: Chats): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // private chats: Chats[] = [
  //   new Chats(1, 'Contact 1', 'Hello', 'assets/avatar1.png', true),
  //   new Chats(2, 'Contact 2', 'Hi', 'assets/avatar2.png', true),
  //   new Chats(3, 'Contact 2', 'No message', 'assets/avatar2.png', false),
  //   new Chats(4, 'Contact 3', 'No message', 'assets/avatar3.png', false),
  //   new Chats(5, 'Contact 4', 'No message', 'assets/avatar4.png', false)
  // ];

  // getChats(): Chats[] {
  //   return this.chats;
  // }
}
