import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat.interface';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  message: string = '';
  element: any;

  constructor(public _chatService: ChatService) {
    _chatService.loadMessage()
    .subscribe(() => {

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.element = document.getElementById('app-messages');
  }

  sendMessage() {

    if (this.message.length === 0) {
      return;
    }

    this._chatService.addMessage(this.message)
      .then(() => this.message = '')
    .catch((err) => console.log('send error ', err));
  }

}
