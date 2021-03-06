import { Component} from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
      <mat-card class="card">
        <mat-card-content>
          <mat-form-field>
            <input [(ngModel)]="message.owner" matInput placeholder="Name">
          </mat-form-field>
          <mat-form-field>
            <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
          </mat-form-field>
          <mat-card-actions>
            <button (click)="post()" mat-button color="primary">Post</button>
          </mat-card-actions>
        </mat-card-content>
      </mat-card>
    `
  })

  export class NewMessageComponent {
    constructor(private service: WebService) {

    }

    public message = {
      owner: '',
      text: ''
    }
    post() {
      this.service.postMessage(this.message);
    }
  }

