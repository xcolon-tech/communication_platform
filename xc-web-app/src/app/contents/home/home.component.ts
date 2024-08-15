import { Component, OnInit } from '@angular/core';
import { ChatlistService } from '../chatlist.service';
import { Chats } from '../chats';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  chatlist!: Chats;

  constructor(private chatService: ChatlistService) {}

  ngOnInit(): void {
    this.chatService.getChats(this.chatlist).subscribe(
      response => {
        this.chatlist = this.chatlist;
      },
      error => {
        console.error('Chat list error', error);
      }
    );
    // this.chatlist = this.chatService.getChats();
  }
}
