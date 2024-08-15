import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent  implements OnInit {
  messages: any;
  chatForm!: FormGroup;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.messages = this.chatService.getMessage();
    this.chatForm = new FormGroup({
      message: new FormControl(null)
    });
  }

  onSendMessage(): void {
    const messageText = this.chatForm.value.message;
    if (messageText && messageText.trim() !== '') {
      this.chatService.sendMessage(messageText);
      this.messages = this.chatService.getMessage();
      this.chatForm.reset();
    }
  }
}
