import { Component, OnInit} from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            <mat-card style="margin:8px">
                <mat-card-title>{{message.owner}}</mat-card-title>
                <mat-card-content>
                    {{message.text}}
                </mat-card-content>
            </mat-card>
        </div>`,

})

export class MessagesComponent implements OnInit {
    constructor(private service: WebService) {}

    async ngOnInit() {
        var response = await this.service.getMessages();
        console.log(response)
    }
    messages: Array<object> = [];
}