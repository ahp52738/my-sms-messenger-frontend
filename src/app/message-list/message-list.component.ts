import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Import required modules
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: any[] = [];
  
  // ✅ Add the missing `newMessage` object
  newMessage = { content: '', to: '' };

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.loadMessages();
  }

  // ✅ Add missing `sendMessage()` method
  sendMessage() {
    if (!this.newMessage.content.trim() || !this.newMessage.to.trim()) {
      alert('Please enter a message and recipient.');
      return;
    }

    this.messagesService.sendMessage(this.newMessage).subscribe((response) => {
      this.messages.push(response);
      this.newMessage = { content: '', to: '' }; // ✅ Reset input fields after sending
    });
  }

  private loadMessages() {
    this.messagesService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }
}
