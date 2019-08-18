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

export class MessagesComponent {
    public messages;

    constructor(private service: WebService){
            this.service.getMessages().subscribe(res => {
                this.messages = res;
            });
        }
    }