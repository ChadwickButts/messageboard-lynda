import { Component} from '@angular/core';
import { MessagesComponent } from './messages.component';


@Component({
    selector: 'navbar',
    template: `
    <mat-toolbar color="primary">
        <button mat-button routerLink="/">Message Board</button>
        <button mat-button routerLink="/messages">Messages</button>
    </mat-toolbar>
    `
})

export class NavbarComponent {
    constructor() { }
}
