import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: any[] = [];

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messagesService.getMessages().subscribe(
      (data: any) => {
        this.messages = data;
      },
      error => {
        console.error('Error fetching messages', error);
      }
    );
  }
}
