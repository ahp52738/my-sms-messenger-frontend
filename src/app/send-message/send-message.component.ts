import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent {
  messageContent: string = '';
  recipient: string = '';

  constructor(private messagesService: MessagesService) {}

  sendMessage() {
    const message = {
      content: this.messageContent,
      to: this.recipient,
    };

    this.messagesService.sendMessage(message).subscribe(
      (response) => {
        console.log('Message sent successfully', response);
        this.messageContent = '';
        this.recipient = '';
      },
      (error) => {
        console.error('Error sending message', error);
      }
    );
  }
}
